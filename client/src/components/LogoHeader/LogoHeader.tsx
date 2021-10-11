import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import logo from '../../../src/Images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';

interface Props {
  loggedIn: boolean;
}

const LogoHeader = ({ loggedIn }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <MUILink component={RouterLink} to={loggedIn ? '/dashboard' : '/login'}>
      <Box className={classes.logo}>
        <img width="auto" src={logo} />
      </Box>
    </MUILink>
  );
};

export default LogoHeader;
