import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselComponent({ stayImgUrls }) {

    if (!stayImgUrls) return <div>Loading...</div>
    return (
        <div className="carousel-component">
            <Carousel showArrows={true} showThumbs={false} showStatus={false} useKeyboardArrows={true}

            // renderArrowPrev={(onClickHandler, hasPrev, label) =>
            //     hasPrev && (
            //         <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
            //             -
            //         </button>
            //     )
            // }
            // renderArrowNext={(onClickHandler, hasNext, label) =>
            //     hasNext && (
            //         <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
            //             +
            //         </button>
            //     )
            // }
            >
                {stayImgUrls.map((img, idx) =>
                    <div key={idx}>
                        <img className="preview-img" src={img} />
                    </div>
                )}


            </Carousel>
        </div>
    )
}
