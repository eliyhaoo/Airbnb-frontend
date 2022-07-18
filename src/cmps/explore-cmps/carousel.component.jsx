import { Carousel } from 'react-responsive-carousel';
import { Loader } from '../general-cmps/loader';
import React from 'react'

export function CarouselComponent({ stayImgUrls, stayId, history, showStatus = false }) {

    const onClickItem = () => {
        history.push(`/stay/${stayId}`)
    }

    // if (!stayImgUrls) return <Loader/>
    if (!stayImgUrls) return <React.Fragment></React.Fragment>
    return (
        <div className="carousel-component">
            <Carousel className="preview-carousel" showThumbs={false} showStatus={showStatus} showIndicators={false} selectedItem={0} onClickItem={onClickItem} >
                {stayImgUrls.map((img, idx) =>
                    <div key={idx}>
                        <img className="preview-img" src={img} />
                    </div>
                )}

            </Carousel >
        </div >
    )
}
