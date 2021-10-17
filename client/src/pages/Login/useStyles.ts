import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';
import { isWhiteSpaceLike } from 'typescript';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    color: 'black',
  },
  authWrapper: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 0,
  },
  loginArea: {
    backgroundColor: 'white',
    boxShadow: '5px',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 100,
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
