import React from "react";
import img from "../../assets/404.jpg";
import { Image, Img } from "@chakra-ui/react";
import './pageNotFound.css'

const PageNotFound = () => {
  return (
    <div>
      <Image src={img} className="notFound" />
    </div>
  );
};

export default PageNotFound;
