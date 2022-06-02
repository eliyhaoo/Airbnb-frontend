export const SearchCountry = ({ selectedRegion, setSelectedRegion }) => {

    const onCloseModal = () => {
        // showFilterModal(false)
        // history.push('/explore')
    }

    const regions = ['im flexible', 'Middle East', 'Italy', 'United States', 'France', 'South America']

    return <section className="search-country">
        <div className="screen header-open" onClick={() => onCloseModal()} ></div>
        <div className="search-modal country-container">
            <h4>Search by region</h4>
            <div className="regions-grid">

                {regions.map((region, idx) =>
                    <div key={idx} onClick={() => setSelectedRegion(region)} className={`region-container ${region === selectedRegion ? 'selected' : ''} flex direction-column`}>
                        <img className="country-img" src={require(`../assets/img/countries/${region}.webp`)} alt="house" />
                        <span>{region}</span>
                    </div>
                )}
            </div>

        </div>
    </section>
}