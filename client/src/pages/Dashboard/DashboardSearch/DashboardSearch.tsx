import React, { ChangeEvent, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { FormControl, InputLabel, OutlinedInput, Typography } from '@material-ui/core';

export default function DashboardSearch(): JSX.Element {
  const classes = useStyles();
  const [cityValue, setCityValue] = useState<string | ''>('Search');
  const [startValue, setStartValue] = useState<Date | null>(new Date());
  const [endValue, setEndValue] = useState<Date | null>(new Date());

  const handleStartDateChange = (newValue: Date | null) => {
    setStartValue(newValue);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndValue(newValue);
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityValue(event.target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="component-outlined">Search By City</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={cityValue}
            onChange={handleCityChange}
            label={<Typography>Drop Off</Typography>}
          />
        </FormControl>
      </Grid>
      <Grid item xs={1} md={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label={<Typography>Drop Off</Typography>}
            inputFormat="MM/dd"
            value={startValue}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={1} md={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label={<Typography>Pick Up</Typography>}
            inputFormat="MM/dd"
            value={endValue}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
