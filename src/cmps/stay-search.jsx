import searchSvg from '../assets/svg/searchsvg.svg'

export const StaySearch=({setModalOpen})=>{
    
    return <section className="stay-search flex space-between align-center">

    <button onClick={()=>setModalOpen('location')} className="search-location">
        AnyWhere
    </button>

    <button onClick={()=>setModalOpen('dates')} className="search-date">
        Any Week
    </button>

    <div onClick={()=>setModalOpen('guest')} className="search-guest">
        <div className="flex space-between align-center">
            <div className="search-guest-btn">
        Add guests 
            </div>
    <button className="search-btn flex align-center" ><img src={searchSvg} alt="btn" /> </button>
        </div>
    </div>


    </section>
}