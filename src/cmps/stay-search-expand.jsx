import searchSvg from '../assets/svg/searchsvg.svg'

export const StaySearchExpand = () => {


    return <section className="stay-search-expand flex space-between align-center">

        <div className="search-location-expand">
            <div>Where</div>
            <input type="text" placeholder="Search-destinations" />
        </div>
        <div className="search-date-expand">
            <div>When</div>
            <span>Any week</span>
            
        </div>
        <div className="search-guest-expand flex space-between align-center">
            <div>
            <div>Who</div>
            <span>Add guest</span>

            </div>


            <button className="src-btn-big-expand flex align-center" ><img src={searchSvg} alt="btn" />Search </button>
            {/* <button className="search-btn-small-expand flex align-center" ><img src={searchSvg} alt="btn" /></button> */}
            </div >

            



            {/* <div className="btn-search-expand-container"> */}

                {/* <button className="src-btn-expand-container">
                <img src={searchSvg} alt="btn" />
                </button> */}
            {/* </div> */}

            {/* <div className="search-guest-expand flex space-between">
            <div>Guests</div>
            <div className="src-btn-container">
                <button className="search-btn-expand flex align-center" ></button>
            </div> */}

        {/* 
    <button  className="search-location">
        AnyWhere
    </button>

    <button className="search-date">
        Any Week
    </button>

    <button className="search-guest">
        <div className="flex space-between align-center">
            <div className="search-guest-btn">
        Add guests 
            </div>
    <button className="search-btn flex align-center" ><img src={searchSvg} alt="btn" /> </button>
        </div>
    </button> */}


    </section >
}