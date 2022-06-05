import { Carousel } from 'react-responsive-carousel';

export function CarouselComponent({ stayImgUrls, stayId, history }) {

    const onClickItem = () => {
        history.push(`/stay/${stayId}`)
    }

    if (!stayImgUrls) return <div>Loading...</div>
    return (
        <div className="carousel-component">
            <Carousel className="preview-carousel" showThumbs={false} showStatus={false} onClickItem={onClickItem} >
                {stayImgUrls.map((img, idx) =>
                    <div key={idx}>
                        <img className="preview-img" src={img} />
                    </div>
                )}

            </Carousel >
        </div >
    )
}
