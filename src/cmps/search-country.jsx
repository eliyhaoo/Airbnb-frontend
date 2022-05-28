import { useState } from "react"

export const SearchCountry = () => {

    const [selectedRegion,setSelectedRegion] =useState('Im flexible')

    const onCloseModal = () => {
        // showFilterModal(false)
        // history.push('/explore')
    }



    const regions = ['Im flexible', 'Middle East', 'Italy', 'United States', 'France', 'South America']
   

    return <section className="search-country">
        <div className="screen header-open" onClick={() => onCloseModal()} ></div>
        <div className="search-country-container">
        <h4>Search by region</h4>
            <div className="regions-grid">

                {regions.map((region, idx) =>
                    <div onClick={()=>setSelectedRegion(region)} className={`region-container ${region === selectedRegion? 'selected':''} flex direction-column`}>
                        <img key={idx} className="country-img" src={require(`../assets/img/countries/${region}.webp`)} alt="house" />
                        <span>{region}</span>
                    </div>
                )}
            </div>


        </div>
    </section>
}