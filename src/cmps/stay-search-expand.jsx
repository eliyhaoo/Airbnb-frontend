export const StaySearchExpand = () => {


    return <section className="stay-search-expand flex space-between align-center">

        <div className="search-location-expand">
            <div>Where</div>
            <input type="text" placeholder="Search-destinations" />
        </div>
        <div className="search-date-expand">
            <div>When</div>
        </div>
        <div className="search-guest-expand flex space-between align-center">
            <div>Guests</div>

            <div className="btn-search-expand-container">

                <button className="src-btn-expand-container">
                    <span className="src-span"><span className="src-color-span"></span >sear</span>
                </button>
            </div>

            {/* <div className="search-guest-expand flex space-between">
            <div>Guests</div>
            <div className="src-btn-container">
                <button className="search-btn-expand flex align-center" ></button>
            </div> */}

        </div >
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