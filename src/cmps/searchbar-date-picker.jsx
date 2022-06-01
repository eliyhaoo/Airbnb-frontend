import  { useState } from "react";
import { useDispatch } from "react-redux";

import addWeeks from "date-fns/addWeeks";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import remove from "../../styles/svg/delete-date.svg";
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

export function SearchbarDatePicker({ order, setOrder,activeDatesTab,setActiveTab ,setModalOpen}) {
	const dispatch = useDispatch();
	// const removeUrl = (
	// 	<img onClick={() => dispatch(setOrder({ ...order, checkIn: null, checkOut: null, guestsCount: 1, adults: 1, children: 0, infants: 0 }))} className='clear-dates' src={remove} />
	// );

	// function getWeeksAfter(date, amount) {
	// 	return date ? addWeeks(date, amount) : undefined;
	// }

	
	const [value, setValue] = useState([null, null]);


	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateRangePicker
					disablePast
					calendars={mode}
					// value={[order.checkIn, order.checkOut]}
					value={value}
					// maxDate={getWeeksAfter(order.checkIn, 8)}
					onChange={(newValue) => {
						setValue(newValue)
						activeDatesTab === 'check-in' ? setActiveTab('check-out'):setModalOpen('guest')
						// setModalOpen('guest')
					
					}}
					// startText='Check-in'
					// endText='Check-out'
					renderInput={(startProps, endProps) => (
						<div className="date-picker-inputs flex space-between full-width">
							{console.log('Props',startProps.inputProps)}
							<div onClick={()=>{setActiveTab('check-in')}} className={`start-date ${activeDatesTab === 'check-in'? 'open':''}`}>
								<div className="search-label">Check in</div>
							<input  autoComplete="off" ref={startProps.inputRef} {...startProps.inputProps} />
							</div>
							<div  onClick={()=>{setActiveTab('check-out')}} className={`end-date ${activeDatesTab === 'check-out'? 'open':''}`}>
								<div className="search-label">Check in</div>
							<input  autoComplete="off" ref={endProps.inputRef} {...endProps.inputProps} />
							</div>
						</div>

						// <React.Fragment>
						// 	<TextField className={"start-date"} {...startProps} />
						// 	<TextField className={"end-date"} {...endProps} />
						// 	{/* <span>{removeUrl}</span> */}
						// </React.Fragment>
					)}
				/>
			</LocalizationProvider>
		</ThemeProvider>
	);
}