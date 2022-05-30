import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselComponent({ stayImgUrls, stayId, history }) {

    function onClickItem() {
        console.log(history)
        history.push(`/stay/${stayId}`)
    }

    if (!stayImgUrls) return <div>Loading...</div>
    return (
        <div className="carousel-component">
            <Carousel showThumbs={false} showStatus={false} onClickItem={onClickItem} >
                {stayImgUrls.map((img, idx) =>
                    <div key={idx}>
                        <img className="preview-img" src={img} />
                    </div>
                )}

            </Carousel >
        </div >
    )
}
