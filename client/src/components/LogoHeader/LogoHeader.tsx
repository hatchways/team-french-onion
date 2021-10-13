import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import logo from '../../../src/Images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';

interface Props {
  loggedIn: boolean;
}

const LogoHeader = ({ loggedIn }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      <MUILink component={RouterLink} to={loggedIn ? '/dashboard' : '/login'}>
        <img width="auto" src={logo} />
      </MUILink>
    </Box>
  );
};

export default LogoHeader;
