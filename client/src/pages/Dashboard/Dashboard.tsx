import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import getAllProfiles from '../../helpers/APICalls/getAllProfiles';
import { Profile } from '../../interface/Profile';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  const handleSubmit = () => {
    console.log('submitted');
  };

  useEffect(() => {
    initSocket();

    getAllProfiles().then((data) => {
      setProfiles(data.profiles);
    });
  }, [initSocket]);

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
      </Grid>

      {/**TODO:
       * 1. Each Card should be a link to the userprofile route
       * 2. Currently using mock profiles, need to change to actual list of profiles from api call
       ***/}
      <Grid container className={classes.listingsWrapper}>
        {Array.from(profiles).map((_, index) => (
          <Grid item xs={4} key={index} className={classes.listingItem}>
            <Box py={2} border={1} display={'flex'} justifyContent={'center'}>
              <ProfileCard profile={profiles[index]}></ProfileCard>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
