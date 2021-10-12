import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { AppBar, Button, Grid } from '@material-ui/core';
import LogoHeader from '../LogoHeader/LogoHeader';
import AuthMenu from '../AuthMenu/AuthMenu';
import { User } from '../../interface/User';
import { Link as RouterLink } from 'react-router-dom';
import AuthHeader from '../AuthHeader/AuthHeader';

interface Props {
  loggedIn: boolean;
  user?: User;
}

const NavBar = ({ loggedIn, user }: Props): JSX.Element => {
  const classes = useStyles();

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
      <Box className={classes.appBarButtonsWrapper}>
        <RouterLink to="/">
          <Button className={classes.appBarButtons}>Notifications</Button>
        </RouterLink>
        <RouterLink to="/">
          <Button className={classes.appBarButtons}>Messages</Button>
        </RouterLink>
        <RouterLink to="/">
          <Button className={classes.appBarButtons}>My Jobs</Button>
        </RouterLink>
        <RouterLink to="/">
          <Button className={classes.appBarButtons}>Requests</Button>
        </RouterLink>
        <Box className={classes.profileIconWrapper}>
          <AuthMenu loggedIn user={user} />
        </Box>
      </Box>
    );
  };

  return (
    <Box height="70">
      {/*Add Box parent to push other content down, can remove box to fix nav bar to top of screen*/}
      <AppBar position="sticky" className={classes.appBar}>
        <LogoHeader loggedIn={loggedIn} />
        {loggedIn ? userNav() : guestNav()}
      </AppBar>
    </Box>
  );
};

export default NavBar;
