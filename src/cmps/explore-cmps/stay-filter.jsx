import { useDispatch, useSelector } from "react-redux"
import { useForm } from '../../hooks/useForm'

import { MultiselectCheckbox } from "./multiselect-checkbox"
import { PriceFilter } from "./price-filter"

import { loadStays, setFilterBy } from "../../store/actions/stay.action"

import closeModalImg from "../../assets/svg/close-modal.svg"
import _ from 'lodash'

export const StayFilter = ({ showFilterModal, history }) => {

    const { filterBy } = useSelector(storeState => storeState.stayModule)
    const [filterByProperties, handleChange, setFilterProperties] = useForm(filterBy.properties)
    const dispatch = useDispatch()
    const titles = ['A place all to yourself', 'Your own room in a home or a hotel, plus some shared common spaces', 'A sleeping space and common areas that may be shared with others']

    const onSetFilterBy = (ev) => {
   
        if (!ev.target) return
        ev.preventDefault()
        dispatch(setFilterBy('properties', filterByProperties))
        dispatch(loadStays())
        onCloseModal()
    }

    const onCloseModal = () => {
        showFilterModal(false)
        history.push('/explore')
    }

    const onSetRoomType = (roomType) => {
        setFilterProperties((prevState) => ({ ...prevState, roomType }))
    }

    const onSetRoomAmenities = (amenities) => {
        setFilterProperties((prevState) => ({ ...prevState, amenities }))
    }

    const onSetBeds = (beds) => {
        setFilterProperties((prevState) => ({ ...prevState, beds }))
    }

    const onSetPrice = (price) => {
        setFilterProperties((prevState) => ({ ...prevState, price }))
    }


    return <div className="stay-filter">
        <div className="header-container screen" onClick={() => onCloseModal()} ></div>
        <div className="filter-modal">
            <div className="modal-head-container flex align-center">
                <button className="close-modal-btn" onClick={() => onCloseModal()}><img className="close-modal-img" src={closeModalImg} /></button>
                <h3 className="modal-title">Filters</h3>
            </div>

            <form className="filter-form" onSubmit={onSetFilterBy}>

                <div className="filter-type price-range">
                    <h2>Price range</h2>
                    {/* <p>The average nightly price is</p> */}
                    <div className="price-filter-container">
                        <PriceFilter onSetPrice={onSetPrice} price={filterByProperties.price} />
                    </div>
                    {/* <div className="price-range-container flex ">
                        <div className="min-price">min price</div>
                        <div>-</div>
                        <div className="max-price">max price</div>
                    </div> */}
                    {/* <span className="span"><p>The average nightly price is XXXX</p></span> */}
                </div>

                <div className="filter-type type-of-place">
                    <h2>Type of place</h2>

                    <div className="multi-select-container flex">

                        <MultiselectCheckbox onHandleChange={onSetRoomType} titles={titles} fields={filterByProperties.roomType} />
                    </div>
                </div>

                <div className="filter-type-beds">
                    <h2>Beds</h2>

                    <button type="button" onClick={() => { onSetBeds('') }} className={`filter-form-btn ${filterByProperties.beds === '' ? 'active' : ''}`}>Any</button>
                    {_.times(7, (i) => {
                        return <button type="button" onClick={() => { onSetBeds(i + 1) }} key={i + '5a'} className={`filter-form-btn ${filterByProperties.beds === i + 1 ? 'active' : ''}`}>{i + 1}</button>
                    })}
                    <button type="button" onClick={() => { onSetBeds(8) }} className={`filter-form-btn ${filterByProperties.beds === 8 ? 'active' : ''}`}>8+</button>

                </div>

                <div className="filter-type amenities">
                    <h2>Amenities</h2>

                    <div className="multi-select-container flex">

                        <MultiselectCheckbox onHandleChange={onSetRoomAmenities} fields={filterByProperties.amenities} />
                    </div>

                </div>

                <div className="filter-footer flex space-between align-center">
                    <p>Clear all</p>
                    <button type="submit" className="filter-footer-btn">Show Stays</button>
                </div>
            </form>

        </div>
    </div >
}