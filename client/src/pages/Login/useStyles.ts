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
    maxHeight: 50,
    flexGrow: 3,
    margin: 10,
  },
  logoText: {
    marginLeft: 10,
    paddingTop: 10,
  },
  header: {
    display: 'flex',
  },
  authWrapper: {
    display: 'flex',
    /*alignItems: 'flex-end',*/
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
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
