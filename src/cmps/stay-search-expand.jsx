import { useState } from 'react'
import searchSvg from '../assets/svg/searchsvg.svg'
import { SearchCountry } from './search-country'

export const StaySearchExpand = ({setModalOpen,modalOpen,isBig,setIsBig}) => {

    

    const onSetModal=(ev,modal)=>{
        ev.stopPropagation()
        setModalOpen(modal)
        setIsBig(true)
    }

    // const [modalOpen,setModalOpen]=useState('location')

    return <section className="stay-search-expand ">

        <div className="stay-search-expand-container flex space-between align-center">
        <div onClick={(ev)=>onSetModal(ev,'location')} className={`search-location-expand ${modalOpen === 'location'? 'open':''}`}>
            <div>Where</div>
            <input type="text" placeholder="Search-destinations" />
            {modalOpen === 'location'&& <SearchCountry/>} 
            
        </div>
        <div onClick={()=>setModalOpen('dates')} className="search-date-expand">
            <div>When</div>
            <span>Any week</span>
            

        </div>
        <div onClick={()=>setModalOpen('guest')} className="search-guest-expand flex space-between align-center">
            <div>
                <div>Who</div>
                <span>Add guest</span>

            </div>

            <div className={`search-btn-container src-btn-${isBig ? 'big':'small'}-expand`}>

                <div class="btn-container">
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="content">
                        <button className="action-btn ">
                            <img src={searchSvg} alt="btn" /><span></span>
                        </button>
                    </div>
                </div>

            </div >
        </div >
        </div>
       
           




    </section >
}