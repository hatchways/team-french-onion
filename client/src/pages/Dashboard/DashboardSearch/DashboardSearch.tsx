import { ChangeEvent, useState, KeyboardEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { IconButton, Typography } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

export default function DashboardSearch(): JSX.Element {
  const classes = useStyles();
  const [cityValue, setCityValue] = useState<string | ''>('Search');
  const [startValue, setStartValue] = useState<Date | null>(new Date());
  const [endValue, setEndValue] = useState<Date | null>(new Date());
  const initialDate = new Date();

  const handleStartDateChange = (newValue: Date | null) => {
    setStartValue(newValue);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndValue(newValue);
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityValue(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    // TODO: Temp placeholder, contains values needed from search to be passed on.
    if (event.key === 'Enter') {
      event.preventDefault();
      alert(`${cityValue}, ${startValue}, ${endValue}`);
    }
  };

  return (
    <Grid container justify={'center'} className={classes.root}>
      <Grid item>
        <TextField
          id="city"
          label="Search by city"
          variant="outlined"
          onKeyPress={handleKeyPress}
          onChange={handleCityChange}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
      </Grid>
      <Grid item xs={1} md={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label={<Typography>Start Date</Typography>}
            inputFormat="MM/dd"
            value={startValue}
            minDate={initialDate}
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={1} md={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label={<Typography>End Date</Typography>}
            inputFormat="MM/dd"
            value={endValue}
            minDate={initialDate}
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
