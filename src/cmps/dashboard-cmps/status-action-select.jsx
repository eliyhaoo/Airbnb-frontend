import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { reservationService } from '../../services/reservation.service'
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
    typography: {
        fontFamily: 'cereal-book'

    },
});

export const StatusActionSelect = ({ reservation, loadReservations }) => {
    const [status, setStatus] = React.useState(reservation.status);

    const handleChange = (event) => {
        setStatus(event.target.value);
        reservation.status = event.target.value
        setReservationStatus()
    };

    const setReservationStatus = async () => {
        // console.log('RESERVATION BEFORE SENDING', reservation);
        const updatedResevation = await reservationService.save(reservation)
        loadReservations()
        // console.log('RESERVATION AFTER SENDING', reservation);
    }

    const selectProps = (status !== 'pending') ?
        {
            variant: "standard",
            sx: { m: 0, minWidth: 120 },
            disabled: 'disabled'
        }
        :
        {
            variant: "standard",
            sx: { m: 0, minWidth: 120 },
        }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <FormControl {...selectProps}>
                    <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={status}
                        onChange={handleChange}
                        label="Status"
                    >
                        <MenuItem value={'approved'}>Approved</MenuItem>
                        <MenuItem value={'declined'}>Declined</MenuItem>
                        <MenuItem value={'pending'}>Pending</MenuItem>
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    );
}