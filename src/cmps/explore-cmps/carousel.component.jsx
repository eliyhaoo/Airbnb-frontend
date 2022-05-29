import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselComponent({ stayImgUrls }) {

    if (!stayImgUrls) return <div>Loading...</div>
    return (
        <div className="carousel-component">
            <Carousel showThumbs={false} showStatus={false}
            >
                {
                    stayImgUrls.map((img, idx) =>
                        <div key={idx}>
                            <img className="preview-img" src={img} />
                        </div>
                    )
                }


            </Carousel >
        </div >
    )
}
