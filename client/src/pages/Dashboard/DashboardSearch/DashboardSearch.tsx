import { ChangeEvent, useState, KeyboardEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { IconButton, Typography } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

interface Props {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleStartDateChange: (newValue: Date | null) => void;
  handleEndDateChange: (newValue: Date | null) => void;
  startValue: Date | null;
  endValue: Date | null;
}

export default function DashboardSearch({
  handleSearchChange,
  handleStartDateChange,
  handleEndDateChange,
  startValue,
  endValue,
}: Props): JSX.Element {
  const classes = useStyles();
  const initialDate = new Date();

  return (
    <Grid container justify={'center'} className={classes.root}>
      <Grid item>
        <TextField
          id="city"
          label="Search by city"
          variant="outlined"
          onChange={handleSearchChange}
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
