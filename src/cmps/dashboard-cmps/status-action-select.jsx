import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const StatusActionSelect = ({currStatus}) => {
    const [status, setStatus] = React.useState('currStatus');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const selectProps = (currStatus !== 'pending') ? 
    {
        variant:"standard",
        sx:{ m: 1, minWidth: 120 },
        disabled:'disabled'
    }
    :
    {
        variant:"standard",
        sx:{ m: 1, minWidth: 120 },
        
    }
return (
    <div>
        {/* {status !== 'pending' && disabled} */}
        {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}> */}
        <FormControl {...selectProps}>
            <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={status}
                onChange={handleChange}
                label="Status"
            >

                <MenuItem value={'approved'}>Approve</MenuItem>
                <MenuItem value={'decline'}>Decline</MenuItem>
            </Select>
        </FormControl>
        {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
    </div>
);
}