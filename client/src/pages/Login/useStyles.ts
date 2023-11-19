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
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: 0,
  },
  loginArea: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
  },
  welcome: {
    fontSize: 30,
    margin: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
}));

export default useStyles;
