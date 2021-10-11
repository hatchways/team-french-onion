import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';
import logo from '../../../src/Images/logo.png';

const LogoHeader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      {/*TODO: Add link*/}
      <img width="50px" src={logo} />
      <Typography className={classes.logoText} component="h1" variant="h4">
        LovingSitter.
      </Typography>
    </Box>
  );
};

export default LogoHeader;
