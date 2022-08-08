import fetch from "isomorphic-fetch";
import { ContentType, HttpMethod } from "./api-request.enum";
import { IMakeRequest } from "./api-request.interface";
import { errorTransformer, successTransformer } from "./api-transformer";
import { API_BASE_URL } from "./api-url";
import { buildFormData } from "./buildFormData";
export async function makeRequest<TResponse>({
  body,
  method = HttpMethod.GET,
  path,
  bearerToken,
  formData,
}: IMakeRequest) {
  // construct api full url
  const apiFullUrl = `${API_BASE_URL}${path}`;

  // configure body
  body = formData ? buildFormData(body) : body;

  // configure request header
  const headers = {
    // "Content-Type": formData
    //   ? ContentType.MULTIPART_FORM_DATA
    //   : ContentType.APPLICATION_JSON,
    Authorization: `Bearer ${bearerToken}`,
    [formData ? "fakeContent" : "Content-Type"]: ContentType.APPLICATION_JSON,
  };

  try {
    //   send request
    const resp = await fetch(apiFullUrl, {
      method,
      body: formData ? body : JSON.stringify(body),
      headers,
    });

    // get response json
    const jsonResp: any = await resp.json();

    // get response code
    const responseCode = resp.status;

    if (responseCode > 299) {
      // server returned an error
      return errorTransformer({ ...jsonResp, statusCode: responseCode });
    }

    return successTransformer<TResponse>({
      ...jsonResp,
      statusCode: responseCode,
    });
  } catch (error) {
    // throw new Error({})
  }
}
