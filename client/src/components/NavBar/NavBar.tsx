import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { AppBar, Button, useMediaQuery } from '@material-ui/core';
import LogoHeader from '../LogoHeader/LogoHeader';
import AuthMenu from '../AuthMenu/AuthMenu';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';
import AuthHeader from '../AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import BecomeSitter from './BecomeSitter/BecomeSitter';

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const { loggedInUser } = useAuth();
  const guestNav = () => {
    return (
      <Box display="flex" justifyContent="center">
        <AuthHeader linkTo="/login" btnText="Login" />
        <AuthHeader linkTo="/signup" btnText="Signup" />
      </Box>
    );
  };

  const userNav = () => {
    return (
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
        <MUILink>
          <BecomeSitter />
        </MUILink>
        <MUILink component={RouterLink} to={'/profile'}>
          <Button className={classes.appBarButtons}>Notifications</Button>
        </MUILink>
        <MUILink component={RouterLink} to={'/'}>
          <Button className={classes.appBarButtons}>My Jobs</Button>
        </MUILink>
        <MUILink component={RouterLink} to={'/bookings'}>
          <Button className={classes.appBarButtons}>Requests</Button>
        </MUILink>
        <Box px={3}>
          <AuthMenu />
        </Box>
      </Box>
    );
  };

  return (
    <Box height="70">
      {/*Add Box parent to push other content down, can remove box to fix nav bar to top of screen*/}
      <AppBar
        position="sticky"
        className={classes.appBar}
        style={isSmallScreen ? { flexDirection: 'column' } : undefined}
      >
        <LogoHeader />
        {loggedInUser?.username && loggedInUser.email ? userNav() : guestNav()}
      </AppBar>
    </Box>
  );
};

export default NavBar;
