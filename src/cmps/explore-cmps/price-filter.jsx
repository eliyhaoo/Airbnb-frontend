import * as React from 'react'
import PropTypes from 'prop-types'
import Slider, { SliderThumb } from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

import { useSelector } from "react-redux"
import { useState } from 'react'

import { stayService } from '../../services/stay.service'

function ValueLabelComponent(props) {
    const { children, value } = props
    
    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    )
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
}

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#b0b0b0',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        // '&:hover': {
        //     boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        // },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: '#b0b0b0',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}))

function AirbnbThumbComponent(props) {
    const { children, ...other } = props
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    )
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
}

export const PriceFilter = ({ onSetPrice }) => {

    const { stays } = useSelector(storeState => storeState.stayModule)
    const minPrice = stayService.getStaysMinPrice(stays)
    const maxPrice = stayService.getStaysMaxPrice(stays)

    return (
        <Box sx={{ width: 320 }}>
            <Box sx={{ m: 3 }} />
            <Typography gutterBottom>The average nightly price is</Typography>
            <AirbnbSlider
                name='price'
                disableSwap
                onChange={(ev) => onSetPrice({ min: ev.target.value[0], max: ev.target.value[1] })}
                valueLabelDisplay="on"
                components={{ Thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={[minPrice, maxPrice]}
                min={minPrice}
                max={maxPrice}
            />
        </Box>
    )
}

