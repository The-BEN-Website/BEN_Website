import React from "react";
import { useNavigate } from "react-router-dom";
import Believe_Img from "../assets/Home_assets/flyer.jpeg";
import Firework from "../assets/Home_assets/vid_.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Anniversary = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/home");
    window.location.reload()
  }, 10000);

  return (
    <div className="flex items-center justify-center relative h-full w-full">
      <LazyLoadImage
        src={Firework}
        className="inline-block absolute w-full h-full"
        alt=""
      />
      <div className="absolute mx-auto w-1/3 h-fit text-center border rounded-2xl p-0 bg-zinc-100">
        <LazyLoadImage
          src={Believe_Img}
          className="w-fit mx-auto rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Anniversary;
