import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useHistory } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import getAllProfiles from '../../helpers/APICalls/getAllProfiles';
import { Profile } from '../../interface/Profile';
import DashboardSearch from './DashboardSearch/DashboardSearch';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchValue, setSearchValue] = useState<string | ''>('');
  const [startValue, setStartValue] = useState<Date | null>(new Date());
  const [endValue, setEndValue] = useState<Date | null>(null);

  const { loggedInUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    getAllProfiles(searchValue, startValue, endValue).then((data) => {
      setProfiles(data.profiles);
    });
  }, [searchValue, startValue, endValue]);

  const handleStartDateChange = (newValue: Date | null) => {
    setStartValue(newValue);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndValue(newValue);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (loggedInUser === undefined) return <CircularProgress />;

  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Grid item className={classes.searchWrapper}>
        <Typography className={classes.searchText}>Search for Users</Typography>
        <DashboardSearch
          handleSearchChange={handleSearchChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          startValue={startValue}
          endValue={endValue}
        />
      </Grid>
      {/**TODO:
       *
       * Currently using mock profiles, need to change to actual list of profiles from api call
       ***/}
      <Grid container className={classes.listingsWrapper}>
        {profiles.length ? (
          Array.from(profiles).map((_, index) => (
            <Grid item xs={4} key={index} className={classes.listingItem}>
              <Box py={2} display={'flex'} justifyContent={'center'}>
                <ProfileCard profile={profiles[index]}></ProfileCard>
              </Box>
            </Grid>
          ))
        ) : (
          <Box m={'auto'}>No users found.</Box>
        )}
      </Grid>
    </Grid>
  );
}
