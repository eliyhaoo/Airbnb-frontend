import { useDispatch } from 'react-redux'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateRangePicker from '@mui/lab/DateRangePicker'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { updateReserve } from '../../store/actions/reserve.action'

const mode = window.innerWidth < 780 ? 1 : 2;
const theme = createTheme({
	palette: {
		primary: {
			main: "#FF385C",
		},
		secondary: {
			main: "#FF385C",
		},
	},
});

export function SearchbarDatePicker({ dates, activeDatesTab, setActiveTab, setModalOpen, setSearchByFields }) {
	const dispatch = useDispatch();



	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateRangePicker
					disablePast
					calendars={mode}
					value={[dates.checkIn, dates.checkOut]}
					onChange={(newValue) => {
						activeDatesTab === 'check-in' ? setActiveTab('check-out') : setModalOpen('guest')
						dispatch(updateReserve('dates', { checkIn: newValue[0], checkOut: newValue[1] }))
						setSearchByFields((prevState) => ({ ...prevState, dates: { checkIn: newValue[0], checkOut: newValue[1] } }))
					}}

					renderInput={(startProps, endProps) => {
						startProps.inputProps.placeholder = 'Add dates'
						endProps.inputProps.placeholder = 'Add dates'

						return (
							<div className="date-picker-inputs flex space-between full-width">

								<div onClick={() => { setActiveTab('check-in') }} className={`start-date ${activeDatesTab === 'check-in' ? 'open' : ''}`}>
									<div className="search-label">Check in</div>
									<input autoComplete="off" ref={startProps.inputRef} {...startProps.inputProps} />
								</div>

								<div onClick={() => { setActiveTab('check-out') }} className={`end-date ${activeDatesTab === 'check-out' ? 'open' : ''}`}>
									<div className="search-label">Check out</div>
									<input autoComplete="off" ref={endProps.inputRef} {...endProps.inputProps} />
								</div>

							</div>
						)
					}}
				/>
			</LocalizationProvider>
		</ThemeProvider>
	);
}