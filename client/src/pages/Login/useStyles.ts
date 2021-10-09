import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  logo: {
    display: 'flex',
    flexGrow: 1,
    marginTop: 20,
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 2,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 30,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
}));

export default useStyles;
