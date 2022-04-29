import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {Carousel} from "react-bootstrap";
import "./headerCorousel.css";
import logo from "../../images/cblogo.png"
import icon from '../../images/icon.png'

function HeaderCorousel({ data }) {
  const { images } = data?.allSanityGallery?.nodes[0];

  const imageData = images.map((image, i) => {
    console.log(image?.imageTitle)
    return (
        <Carousel.Item>
          <GatsbyImage
          image={image?.asset?.gatsbyImageData}
          alt="this is an image"
        />
        <h1 className="slider-img-title">{image?.imageTitle}</h1>
        </Carousel.Item>
        
        
      
    );
  });

  

  return (
    <div className="corousel-container">
      <Carousel className="p-0">
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <GatsbyImage
              className="car-img"
              image={image?.asset?.gatsbyImageData}
              alt="this is an image"
            />
            <h1 className={image?.imageTitle ? "slider-img-title" : ""}>{image?.imageTitle}</h1>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HeaderCorousel;
