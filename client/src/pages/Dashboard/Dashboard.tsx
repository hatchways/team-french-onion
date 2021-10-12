import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Typography } from '@material-ui/core';
import DashboardSearch from './DashboardSearch/DashboardSearch';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { mockProfiles } from '../../mocks/mockProfile';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  const handleSubmit = () => {
    console.log('submitted');
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
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <NavBar loggedIn user={loggedInUser} />
      <Grid item className={classes.searchWrapper}>
        <Typography className={classes.searchText}>Search for Users</Typography>
        <DashboardSearch />
      </Grid>

      <Grid container spacing={5} className={classes.listingsWrapper}>
        {Array.from(mockProfiles).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} className={classes.listingItem}>
            <ProfileCard profile={mockProfiles[index]}></ProfileCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
