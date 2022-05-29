import searchSvg from '../assets/svg/searchsvg.svg'

export const StaySearch=({setModalOpen,setSearchToggle,setIsBig})=>{

    const onSetModalOpen = (ev, modal) => {
        
        ev.stopPropagation()
        setModalOpen(modal)
        setSearchToggle(true)
        setIsBig(true)
    }
    
    return <section className="stay-search flex space-between align-center">

    <button onClick={(ev)=>onSetModalOpen(ev,'location')} className="search-location">
        AnyWhere
    </button>

    <button onClick={(ev)=>onSetModalOpen(ev,'dates')} className="search-date">
        Any Week
    </button>

    <div onClick={(ev)=>onSetModalOpen(ev,'guest')} className="search-guest">
        <div className="search-guest-container flex space-between align-center">
            <div className="search-guest-btn">
        Add guests 
            </div>
    <button className="search-btn flex align-center" ><img src={searchSvg} alt="btn" /> </button>
        </div>
    </div>


    </section>
}