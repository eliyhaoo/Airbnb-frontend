import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { updateReserve } from "../../store/actions/reserve.action";

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

export function CheckoutDatePicker({ dates }) {
	const dispatch = useDispatch()

	const [value, setValue] = useState([null, null]);
	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DateRangePicker
					disablePast
					calendars={mode}
					value={[dates.checkIn, dates.checkOut]}
					onChange={(newValue) => {
						setValue(newValue)
						dispatch(updateReserve('dates', { checkIn: newValue[0], checkOut: newValue[1] }))
					}}
					startText='Check-in'
					endText='Check-out'
					startPlaceholder='Check-in'
					renderInput={(startProps, endProps) => {
						startProps.inputProps.placeholder = 'Add dates'
						endProps.inputProps.placeholder = 'Add dates'

						return (
							<div className="flex">
								<div className="date-input flex direction-column">
									<label className="">CHECK-IN</label>
									<input autoComplete="off" ref={startProps.inputRef} {...startProps.inputProps} />
								</div>
								<div className="date-input flex direction-column">
									<label className="">CHECKOUT</label>
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