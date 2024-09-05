import React from "react";
import SocialsBadge from "./ui/socialsBadge";
import Button from "./ui/button";

const DetailedInfo = () => {
  return (
    <div className="border border-background-tertiary rounded-md">
      <div className="flex flex-col gap-5 p-6">
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7 0L13.3546 10.3029L23.4 12L13.3546 13.6971L11.7 24L10.0454 13.6971L0 12L10.0454 10.3029L11.7 0Z"
              fill="#AFA1F7"
            />
          </svg>
          <h3 className="text-xl text-[#CACACE]">Introduction</h3>
        </div>
        <p className="text-sm text-[#AFB0B6]">
          {
            "My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of thisdiverse and vibrant country. Join me as we embark on a vodyssey,where each photograph tells a story, and every frame is a piece of myheart."
          }
        </p>
      </div>
      <div className="flex flex-col gap-5 border border-background-tertiary border-x-0 border-b-0 p-6">
        <div className="flex items-center gap-2 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7 0L13.3546 10.3029L23.4 12L13.3546 13.6971L11.7 24L10.0454 13.6971L0 12L10.0454 10.3029L11.7 0Z"
              fill="#AFA1F7"
            />
          </svg>
          <h3 className="text-xl text-[#CACACE]">Contact Information</h3>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-medium text-foreground">Email</h3>
            <p className="text-txt-secondary">somadinaamuchie@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Phone</h3>
            <p className="text-txt-secondary">+2348134141834</p>
          </div>
        </div>
        <div>
          <SocialsBadge />
        </div>
        <div className="flex flex-col gap-[10px]">
          <Button>{"Let's work"}</Button>
          <Button>Download CV</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailedInfo;
