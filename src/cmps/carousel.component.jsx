import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselComponent({ stayImgUrls }) {

    if (!stayImgUrls) return <div>Loading...</div>
    return (
        <div className="carousel-wrapper">
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                {stayImgUrls.map((img, idx) =>
                    <div key={idx}>
                        <img className="preview-img" src={img} />
                    </div>
                )}
            </Carousel>
        </div>
    )
}
