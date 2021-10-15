import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import img from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { MobileDatePicker, LocalizationProvider, DateTimePicker } from '@mui/lab';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();

  const initialDate = new Date();

  const [startValue, setStartValue] = useState<Date | null>(new Date());
  const handleStartDateChange = (newValue: Date | null) => {
    setStartValue(newValue);
  };

  useEffect(() => {
    initSocket();
  }, [initSocket]);

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
            <Box px={3} minWidth={200}>
              {/**TODO: Refactor to information from Profile and Reviews for loggedinuser */}
              <img src={img} width="100%" />
              <Typography variant={'h4'} align={'center'} className={classes.headerText}>
                FirstName LastName
              </Typography>
              <Typography variant={'h6'} align={'center'}>
                City
              </Typography>
              <Typography align={'center'}>Availability</Typography>
              <Typography>About Me</Typography>
              <Typography>Reviews Component</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={10} className={classes.paperItem}>
            <Box px={3} minWidth={200}>
              <Typography variant={'h4'} align={'center'} className={classes.headerText}>
                $30/hr
              </Typography>
              <Typography align={'center'}>Stars Here</Typography>
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
                    value={startValue}
                    minDate={initialDate}
                    onChange={handleStartDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
              <Button fullWidth>Send Request</Button>
              <Button fullWidth>Message</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Card elevation={6} sx={{ minWidth: 245, maxWidth: 245 }}>
        Hello
      </Card>
    </Grid>
  );
}
