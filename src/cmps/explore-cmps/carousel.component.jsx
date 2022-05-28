import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


// function renderArrowPrev() {
//     // console.log(props)

//     // const { className, style, onClick } = props
//     // console.log(className, style, onClick)
//     return (
//         <div
//             className="control-arrow"
//             style={{ ...style, display: 'block' }}
//             onClick={onClick}
//         >
//             {/* <img src={ARROW_left} alt="arrow_left" /> */}
//             <button type="button"  >
//                 -
//             </button>
//         </div>
//     )
// }

// function renderArrowNext() {
//     // console.log(props)

//     // const { className, style, onClick } = props
//     // console.log(className, style, onClick)

//     return (
//         <div
//             className="control-arrow"
//             style={{ ...style, display: 'block' }}
//             onClick={onClick}
//         >
//             {/* <img src={ARROW_left} alt="arrow_left" /> */}
//             <button type="button"  >
//                 +
//             </button>
//         </div>
//     )
// }


export function CarouselComponent({ stayImgUrls }) {

    if (!stayImgUrls) return <div>Loading...</div>
    return (
        <div className="carousel-component">
            <Carousel showArrows={true} showThumbs={false} showStatus={false} useKeyboardArrows={true}
            // renderArrowNext={renderArrowNext} renderArrowPrev={renderArrowPrev}

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
