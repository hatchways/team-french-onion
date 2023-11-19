import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';

interface Props {
  linkTo: string;
  btnText: string;
}

const AuthHeader = ({ linkTo, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authHeader}>
      <MUILink component={RouterLink} to={linkTo}>
        <Button
          variant={btnText === 'Signup' ? 'contained' : 'outlined'}
          color="primary"
          className={classes.appBarButtons}
        >
          {btnText}
        </Button>
      </MUILink>
    </Box>
  );
};

export default AuthHeader;
