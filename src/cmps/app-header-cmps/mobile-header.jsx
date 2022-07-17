import searchSvg from '../../assets/svg/blacksearchsvg.svg'
import filterImg from '../../assets/svg/filter.svg'
export const MobileHeader = () => {

    return <section className="mobile-header">
        <form>
            <div className="mobile-search-container flex space-between align-center">

                <div className="search-box-container flex space-between gap-8">

                    <button type='submit' className="mobile-search-btn">
                        <img src={searchSvg} alt="search" />
                    </button>

                    <div className="search-input flex direction-column space-between">
                        <div className="search-label">Where to?</div>
                        <input type="search" placeholder='Anywhere' />
                    </div>

                </div>

                <button type="button" className="mobile-filter-btn">
                    <img className="mobile-filter-svg" src={filterImg} alt="filter" />
                </button>

            </div>
        </form>

    </section>
}