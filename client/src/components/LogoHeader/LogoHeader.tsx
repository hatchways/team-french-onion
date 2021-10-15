import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import logo from '../../../src/Images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';

const LogoHeader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      {/**TODO: Refactor when protected route gets merged (ex...)
       * import ProtectedRoute from '../ProtectedRoute/ProtectedRoute
       * <ProtectedRoute component={RouterLink} to={'/'}>
       */}
      <MUILink component={RouterLink} to={'/'}>
        <img width="auto" src={logo} />
      </MUILink>
    </Box>
  );
};

export default LogoHeader;
