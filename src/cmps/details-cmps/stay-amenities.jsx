


export const StayAmenities = ({ stay }) => {

    const getAmenities = () => {
        return stay.amenities.splice(0, 10)
    }

    return <section className="amenities-container">
        <div className="amenities">
            <h2>What this place offers</h2>
        </div>

        <div className="stay-amenities ">
            {getAmenities().map((amenitie, idx) =>
                < div key={idx} >
                    <div className='amenite-img-container flex'>
                        <div className={`amenite-img ${amenitie}`}> </div>
                        <div className="amenite">{amenitie}</div>
                    </div>
                </div>
            )}
        </div>



    </section >

}