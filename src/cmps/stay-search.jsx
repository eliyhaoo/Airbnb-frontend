import searchSvg from '../assets/svg/searchsvg.svg'

export const StaySearch=()=>{
    
    return <section className="stay-search flex space-between align-center">

    <button  className="search-location">
        AnyWhere
    </button>

    <button className="search-date">
        Any Week
    </button>

    <div className="search-guest">
        <div className="flex space-between align-center">
            <div className="search-guest-btn">
        Add guests 
            </div>
    <button className="search-btn flex align-center" ><img src={searchSvg} alt="btn" /> </button>
        </div>
    </div>


    </section>
}