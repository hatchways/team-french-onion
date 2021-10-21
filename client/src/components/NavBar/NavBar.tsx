import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { AppBar, Button } from '@material-ui/core';
import LogoHeader from '../LogoHeader/LogoHeader';
import AuthMenu from '../AuthMenu/AuthMenu';
import { User } from '../../interface/User';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';
import AuthHeader from '../AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  loggedIn: boolean;
}

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  const guestNav = () => {
    return (
      <Box display={'flex'}>
        <AuthHeader linkTo="/login" asideText="" btnText="LOGIN" />
        <AuthHeader linkTo="/signup" asideText="" btnText="SIGNUP" />
      </Box>
    );
  };

  const userNav = () => {
    return (
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
        {/* TODO: Refactor links to Array.map, going to leave it for now and wait and see 
        info coming in from profiles as we may need to make changes to Model*/}
        <MUILink component={RouterLink} to={'/'}>
          <Button className={classes.appBarButtons}>Notifications</Button>
        </MUILink>
        <MUILink component={RouterLink} to={'/'}>
          <Button className={classes.appBarButtons}>Messages</Button>
        </MUILink>
        <MUILink component={RouterLink} to={'/'}>
          <Button className={classes.appBarButtons}>My Jobs</Button>
        </MUILink>
        <MUILink component={RouterLink} to={'/'}>
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
      <AppBar position="sticky" className={classes.appBar}>
        <LogoHeader />
        {true ? userNav() : guestNav()}
      </AppBar>
    </Box>
  );
};

export default NavBar;
