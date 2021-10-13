import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Box } from '@material-ui/core';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

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
      <NavBar loggedIn user={loggedInUser} />
      <Grid container spacing={5}>
        <Grid item className={classes.gridItem}>
          Left side
        </Grid>
        <Grid item className={classes.gridItem}>
          Right side
        </Grid>
      </Grid>
    </Grid>
  );
}
