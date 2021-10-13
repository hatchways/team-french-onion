import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import img from '../../Images/b1f0e680702e811aa8ba333cb19c0e0ea95e8e31.png';

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
      <Grid container>
        <Grid item xs={7}>
          <Paper elevation={10} className={classes.paperItem}>
            <Box minWidth={200}>
              {/**TODO: Refactor to information from Profile and Reviews for loggedinuser */}
              <img src={img} width="100%" />
              <Typography>FirstName LastName</Typography>
              <Typography>City</Typography>
              <Typography>Availability</Typography>
              <Typography>About Me</Typography>
              <Typography>Reviews Component</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Box mt={5} mx={7} minWidth={200}>
            <Paper elevation={10} className={classes.paperItem}>
              <Typography>$30/hr</Typography>
              <Typography>Stars Here</Typography>
              <Typography>StartDate Here</Typography>
              <Typography>EndDate Here</Typography>
              <Button>Send Request</Button>
              <Button>Message</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
