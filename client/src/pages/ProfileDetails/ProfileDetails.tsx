import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DateTimePicker } from '@mui/lab';
import { mockProfile1 } from '../../mocks/mockProfile';
import { ArrowRight, ArrowLeft } from '@material-ui/icons';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();
  const initialDate = new Date();
  const { firstName, lastName, location, hourlyRate, description, availability, photos } = mockProfile1;

  const [startValue, setStartValue] = useState<Date | null>(new Date());
  const [endValue, setEndValue] = useState<Date | null>(new Date());
  const [sendRequest, setSendRequest] = useState<boolean>(false);
  const [currPhotoPage, setCurrPhotoPage] = useState<number>(0);

  console.log(photos);
  const handleStartDateChange = (newValue: Date | null) => {
    setStartValue(newValue);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndValue(newValue);
  };

  const handleRightArrow = () => {
    if (currPhotoPage < photos.length - 1) {
      setCurrPhotoPage(currPhotoPage + 1);
    }
  };

  const handleLeftArrow = () => {
    if (currPhotoPage > 0) {
      setCurrPhotoPage(currPhotoPage - 1);
    }
  };

  const handleSendRequest = () => {
    // create new request here
    setSendRequest(true);
  };

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={7}>
          <Paper elevation={10} className={classes.paperItem}>
            <Box px={3} pb={3} minWidth={200}>
              {/**TODO: Refactor to information from Profile of loggedinuser */}
              <Box position={'relative'} display={'flex'} justifyContent={'center'}>
                <ArrowRight onClick={handleRightArrow} className={classes.arrowRight} />
                <ArrowLeft onClick={handleLeftArrow} className={classes.arrowLeft} />
                <CardMedia component="img" image={photos[currPhotoPage]} className={classes.image} />
              </Box>
              <Typography variant={'h4'} align={'center'} className={classes.headerText}>
                {`${firstName} ${lastName}`}
              </Typography>
              <Typography variant={'h6'} align={'center'}>
                {`${location}`}
              </Typography>
              <Typography align={'center'}>{`Availability ${availability?.day?.join(' ')}`}</Typography>
              <Typography>About Me</Typography>
              <Typography>{description}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={10} className={classes.paperItem}>
            <Box px={3} minWidth={200}>
              <Typography variant={'h4'} align={'center'} className={classes.headerText}>
                {`$${hourlyRate}/hr`}
              </Typography>
              <Box py={4} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label={<Typography>Start Date</Typography>}
                    value={startValue}
                    minDate={initialDate}
                    onChange={handleStartDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DateTimePicker
                    label={<Typography>End Date</Typography>}
                    value={endValue}
                    minDate={initialDate}
                    onChange={handleEndDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              {!sendRequest ? (
                <Button fullWidth onClick={handleSendRequest}>
                  Send Request
                </Button>
              ) : (
                <Box textAlign={'center'}>Request Sent!</Box>
              )}

              <Button fullWidth>Message</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
