import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export const MultiselectCheckbox = ({ fields, onHandleChange, titles }) => {

  const [state, setState] = useState(fields)


  const handleChange = (event) => {
    const newState = {
      ...state,
      [event.target.name]: event.target.checked
    }
    setState(newState);
    onHandleChange(newState)
  }

  const checkboxMap = Object.keys(state)

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormGroup>

          {checkboxMap.map((stateField, idx) =>
            <div key={idx}>

              <FormControlLabel
                control={
                  <Checkbox checked={state[stateField]} onChange={handleChange} name={`${stateField}`}
                    sx={{
                      color: '#b0b0b0',

                      '&.Mui-checked': {
                        color: '#222222',
                      },
                      '& .MuiSvgIcon-root': { fontSize: 31 }
                    }} />
                }
                label={stateField}
              />
              {titles && <FormHelperText>{titles[idx]}</FormHelperText>}
            </div>
          )}

        </FormGroup>
      </FormControl>
    </Box>
  );
}

