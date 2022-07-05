import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateReserve } from '../../store/actions/reserve.action'

import plusSvg from '../../assets/svg/plus.svg'
import minusSvg from '../../assets/svg/minus.svg'
import disabledMinusSvg from '../../assets/svg/minus-disabled.svg'


export const AddGuest = ({ setSearchByFields, onCloseModal, guests, isInSearch }) => {

    const dispatch = useDispatch()
    const [guestsFields, setGuests] = useState(guests)
    const [decreaseBtnMode ,setBtnMode]=useState({
        adults:false,
        childrens:false,
        infants:false
    })

    const onUpdateGuests = (field, diff) => {
        
        if (diff=== -1 && guestsFields[field]<= ((field!=='adults') ?0:1)) {
            setBtnMode({...decreaseBtnMode,[field]:false})
            return
        } 
        if (diff=== -1 && guestsFields[field]<= ((field!=='adults') ?1:2))setBtnMode({...decreaseBtnMode,[field]:false})
        else setBtnMode({...decreaseBtnMode,[field]:true})
        
        
        const newGuests = { ...guestsFields, [field]: guestsFields[field] + diff, total: guestsFields.total + diff }
        setGuests(newGuests)
        dispatch(updateReserve('guests', newGuests))
        if (setSearchByFields) setSearchByFields((prevState) => ({ ...prevState, guestsNum: newGuests.total }))
    }

    const guestInputs = [
        {
            title:'Adults',
            subtitle:'Ages 13 or above',
            id:'adults'
        },
        {
            title:'Childrens',
            subtitle:'Age 2-12',
            id:'childrens'
        },
        {
            title:'Infants',
            subtitle:'Under 2',
            id:'infants'
        },
    ]

    return <section className="add-guest">
        <div className={`guest-inputs ${isInSearch && 'search-bar'} flex direction-column `}>


       { guestInputs.map(input=>

            <div key={input.id} className="guest-input-container flex space-between align-center">
                <div className="flex direction-column">
                    <div className="count-input-title">{input.title}</div>
                    <div className="count-input-subtitle">{input.subtitle}</div>
                </div>

                <div className="count-container flex space-between">
                    <button className={`add-guest-decerase-btn ${decreaseBtnMode[input.id]?'':'disbaled' }`} type='button' onClick={() => onUpdateGuests(input.id, -1)}>
                        {/* <div className="count-btn-container"> <img src={disabledMinusSvg} alt="minus" /></div> */}
                        <div className="count-btn-container"> <img src={decreaseBtnMode[input.id]? minusSvg:disabledMinusSvg} alt="minus" /></div>
                    </button>
                    <div>{guestsFields[input.id]}</div>
                    <button className="add-guest-decerase-btn" type='button' onClick={() => onUpdateGuests(input.id, +1)}>
                        <div className="count-btn-container"><img src={plusSvg} alt="plus" /></div>
                    </button>
                </div>
            </div>
       ) }

            
            {!isInSearch && 
            <React.Fragment>
                <div className="guest-input-container flex space-between align-center">
                    {<p>This place has a maximum of 10 guests, not including infants. Pets aren't allowed.</p>}
                </div>

                <div className="btn-close">
                    <button type='button' onClick={onCloseModal}>Close</button>
                </div>
            </React.Fragment>
            }

        </div>
    </section>
}