import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { AppBar, Button, Paper } from '@material-ui/core';
import LogoHeader from '../LogoHeader/LogoHeader';
import logo from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import AuthMenu from '../AuthMenu/AuthMenu';
import { User } from '../../interface/User';
import { Link } from 'react-router-dom';

interface Props {
  loggedInUser: User;
}

const NavBar = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box style={{ height: 70 }}>
      {/*Add Box parent to push other content down, can remove box to fix nav bar to top of screen*/}
      <AppBar position="sticky" className={classes.appBar}>
        <LogoHeader />
        <Box className={classes.appBarButtonsWrapper}>
          <Link to="/">
            <Button className={classes.appBarButtons}>Notifications</Button>
          </Link>
          <Link to="/">
            <Button className={classes.appBarButtons}>Messages</Button>
          </Link>
          <Link to="/">
            <Button className={classes.appBarButtons}>My Jobs</Button>
          </Link>
          <Link to="/">
            <Button className={classes.appBarButtons}>Requests</Button>
          </Link>
        </Box>
        <Box className={classes.profileIconWrapper}>
          <AuthMenu loggedIn user={loggedInUser} />
        </Box>
      </AppBar>
    </Box>
  );
};

export default NavBar;
