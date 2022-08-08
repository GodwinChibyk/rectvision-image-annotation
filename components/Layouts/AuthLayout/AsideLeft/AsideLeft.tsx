import Image from "next/image";
import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

const AsideLeft = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div className="relative w-40 h-10 mb-4">
          <Image
            src="/images/logo.png"
            alt="rectvision logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="capitalize text-textNormal text-textColor mb-6">
          computer vision made easy
        </p>

        <div className="w-[520px] h-[550px] relative rounded-2xl">
        <Splide hasTrack={false} 
         options={ {
          type: "fade",
          arrows: false,
          autoplay: true,
          interval: 3000,
          rewind: true,
          width : 520,
          fixedHeight: 550,
          heightRatio: 0.5,
          pauseOnHover: true,
        } } 
        >
          <SplideTrack>
            <SplideSlide>

            <Image
            src="/images/markedImage1.jpg"
            alt="rectvision logo"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
            </SplideSlide>
            <SplideSlide>
            <Image
            src="/images/markedImage2.jpg"
            alt="rectvision logo"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
            </SplideSlide>
            <SplideSlide>
            <Image
            src="/images/markedImage3.jpg"
            alt="rectvision logo"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
            </SplideSlide>
            <SplideSlide>
            <Image
            src="/images/markedImage4.jpg"
            alt="rectvision logo"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
            </SplideSlide>
          </SplideTrack>
        </Splide>
        </div>
       
      </div>
    </div>
  );
};

export default AsideLeft;
