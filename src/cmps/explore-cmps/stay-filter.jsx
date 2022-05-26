import { AppFooter } from "../app-footer"

export const StayFilter = ({ showFilterModal, history }) => {

    const onCloseModal = () => {
        showFilterModal(false)
        history.push('/explore')
    }
    return <div className="stay-filter">
        <div onClick={() => onCloseModal()} className="screen"></div>
        <div className="filter-modal">
            <h3 className="modal-title">Filters</h3>
            <form className="filter-form">
                <div className="price-range">
                    <h2>Price range</h2>
                    <p>The average nightly price is XXXX</p>
                </div>
                <h2>Type of place</h2>
                <div className="form-grid">
                    <div className="form-input">
                        <input type="checkbox" id="entire-place" name="entire-place" />
                        <label htmlFor="entire-place">Entire Place<br></br>
                            <div className="span"><span>A place all to yourself</span></div></label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="shared-room" name="shared-room" />
                        <label htmlFor="shared-room">Shared room<br></br>
                            <div className="span"><span>A sleeping space and common areas that may be shared with others</span></div></label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="privet-room" name="privet-room" />
                        <label htmlFor="privet-room">Privet room<br></br>
                            <div className="span"><span>Your own room in a home or a hotel, plus some shared common spaces</span></div></label>
                    </div>
                </div>

                <h2>Beds</h2>
                <button className="form-btn">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8+</button>

                <h2>Amenities</h2>
                <div className="form-grid">
                    <div className="form-input">
                        <input type="checkbox" id="wifi" name="wifi" />
                        <label htmlFor="wifi">Wifi</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="kitchen" name="kitchen" />
                        <label htmlFor="kitchen">Kitchen</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="heating" name="heating" />
                        <label htmlFor="heating">Heating</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="breakfast" name="breakfast" />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="washer" name="washer" />
                        <label htmlFor="washer">Washer</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="pool" name="pool" />
                        <label htmlFor="pool">Pool</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="smoking-allowd" name="smoking-allowd" />
                        <label htmlFor="smoking-allowd">Smoking allowed</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="beachfront" name="beachfront" />
                        <label htmlFor="beachfront">Beachfront</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="tv" name="tv" />
                        <label htmlFor="tv">TV</label>
                    </div>
                    <div className="form-input">
                        <input type="checkbox" id="free-parking" name="free-parking" />
                        <label htmlFor="free-parking">Free parking on premises</label>
                    </div>

                </div>
            </form>
            <AppFooter />
        </div>
    </div>
}