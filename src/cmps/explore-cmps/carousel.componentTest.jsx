
import Carousel from 'react-grid-carousel'
import { Loader } from '../general-cmps/loader'

export function CarouselComponent({ stayImgUrls, stayId, history }) {

    const onClickItem = () => {
        history.push(`/stay/${stayId}`)
    }

    if (!stayImgUrls) return <Loader />
    return (
        <div className="carousel-component">

            <Carousel className="preview-carousel" hideArrow={false} showDots onClickItem={onClickItem}>
                {/* {stayImgUrls.map((img, idx) =>
                    <div key={idx}>
                        <img className="preview-img" src={img}  width="100%" height="200px"/>
                    </div>
                )} */}

                {stayImgUrls.map((img, idx) => (
                    <Carousel.Item key={idx}>
                        <img className="preview-img" src={img} width="100%"   height="100%"/>
                    </Carousel.Item>
                ))}


            </Carousel>
        </div >
    )
}
