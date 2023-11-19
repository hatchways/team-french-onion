import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext, loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const history = useHistory();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data?.error) {
        setSubmitting(false);
        updateSnackBarMessage('Connection to database was unsuccessful. Please try again.');
      } else if (data?.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  useEffect(() => {
    if (loggedInUser) {
      history.replace('/dashboard');
    }
  }, [history, loggedInUser]);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box alignSelf="center" className={classes.loginArea}>
            <Box maxWidth={450} p={3} alignSelf="center">
              <Grid container>
                <Grid item xs>
                  <Typography className={classes.welcome} component="h1" variant="h5">
                    Welcome back!
                  </Typography>
                </Grid>
              </Grid>
              <LoginForm handleSubmit={handleSubmit} />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
