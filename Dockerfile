# Install dependencies only when needed
FROM node:16-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

RUN apk add --no-cache libc6-compat

RUN yarn global add next react react-dom

WORKDIR /app
COPY package.json yarn.lock ./

COPY . .

RUN yarn

RUN yarn build

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_PUBLIC_BASE_DEVELOPMENT_API_URL https://backend.app.rectvision.com/api/v1

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
