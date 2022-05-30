import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import closeModalImg from "../../assets/svg/close-modal.svg"
import { useForm } from '../../hooks/useForm'
import { setFilterBy } from "../../store/actions/stay.action"
import { MultiselectCheckbox } from "./multiselect-checkbox"

export const StayFilter = ({ showFilterModal, history }) => {

    // const [checkeypeOfPlacedState, setheckeypeOfPlacedState] = useState({ entirePlace: false, tinyRoom: false, privateRoom: false })

    const { filterBy } = useSelector(storeState => storeState.stayModule)

    const [filterByProperties, handleChange, setFilterProperties] = useForm(filterBy.properties)

    const dispatch = useDispatch()

    const onSetFilterBy = (ev) => {
        console.log('EVENT', ev);
        console.log('FILTER BY PROP', filterByProperties);
        if (!ev.target) return
        ev.preventDefault()
        dispatch(setFilterBy('properties', filterByProperties))
    }


    const onCloseModal = () => {
        showFilterModal(false)
        history.push('/explore')
    }

    const onSetRoomType = (roomType) => {
        setFilterProperties((prevState) => ({ ...prevState, roomType }))
    }

    return <div className="stay-filter">
        <div className="screen" onClick={() => onCloseModal()} ></div>
        <div className="filter-modal">
            <div className="modal-head-container flex align-center">
                <button className="close-modal-btn" onClick={() => onCloseModal()}><img className="close-modal-img" src={closeModalImg} /></button>
                <h3 className="modal-title">Filters</h3>
            </div>

            <form className="filter-form" onSubmit={onSetFilterBy}>
                <div className="filter-type price-range">
                    <h2>Price range</h2>
                    <span className="span"><p>The average nightly price is XXXX</p></span>
                </div>

                <div className="filter-type type-of-place">
                    <h2>Type of place</h2>

                    {/* <div className="form-grid">
                        <div className="form-input">
                            <input type="checkbox" id="entire-place" name="typeOfPlace" value="Entire Place" />
                            <label htmlFor="entire-place">Entire Place<br></br>
                                <div className="span"><span>A place all to yourself</span></div></label>
                        </div>
                        <div className="form-input">
                            <input type="checkbox" id="shared-room" name="typeOfPlace" value="Shared Room" />
                            <label htmlFor="shared-room">Shared room<br></br>
                                <div className="span"><span>A sleeping space and common areas that may be shared with others</span></div></label>
                        </div>
                        <div className="form-input">
                            <input type="checkbox" id="private-room" name="typeOfPlace" value="Privet Room" />
                            <label htmlFor="private-room">Privet room<br></br>
                                <div className="span"><span>Your own room in a home or a hotel, plus some shared common spaces</span></div></label>
                        </div>
                    </div> */}

                    <div className="multi-select-container flex">

                        <MultiselectCheckbox onHandleChange={onSetRoomType} fields={filterByProperties.roomType} />
                    </div>
                </div>

                {/* <div className="filter-type-beds">
                    <h2>Beds</h2>
                    <button className="filter-form-btn">Any</button>
                    <button className="filter-form-btn">1</button>
                    <button className="filter-form-btn">2</button>
                    <button className="filter-form-btn">3</button>
                    <button className="filter-form-btn">4</button>
                    <button className="filter-form-btn">5</button>
                    <button className="filter-form-btn">6</button>
                    <button className="filter-form-btn">7</button>
                    <button className="filter-form-btn">8+</button>
                </div>

                <div className="filter-type amenities">
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
                </div> */}

                <div className="filter-footer flex space-between align-center">
                    <p>Clear all</p>
                    <button type="submit" className="filter-footer-btn">Show Stays</button>
                </div>
            </form>

        </div>
    </div >
}