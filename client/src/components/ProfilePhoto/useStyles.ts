import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  formInputlabel: {
    fontSize: '.7rem',
    textAlign: 'right',
    fontWeight: 800,
    marginTop: 14,
    textTransform: 'uppercase',
  },
  formHeader: {
    '& h3': {
      textAlign: 'center',
      margin: theme.spacing(3, 'auto'),
    },
  },
  padding: { padding: theme.spacing(1, 0) },
  formInput: { '& .MuiOutlinedInput-root': { marginRight: 20, width: 370 } },
  submitBtn: {
    '& button': {
      display: 'block',
      backgroundColor: colors.red[400],
      margin: theme.spacing(3, 'auto'),
      padding: theme.spacing('1rem', 9),
      textTransform: 'uppercase',
    },
  },
  uploadInput: {
    textAlign: 'center',
    '& .MuiOutlinedInput-root,': { width: 370 },
  },
  formContainer: {
    width: 770,
  },
  sideBar: {
    paddingTop: 20,
  },
  sideBarItem: {
    width: 50,
    marginRight: theme.spacing(100),
    fontSize: 2,
  },
  active: {
    fontWeight: 10,
  },
  uploadInputField: { display: 'none' },
  uploadInputBtn: {
    borderWidth: 3,
    textAlign: 'center',
    padding: '1.5rem 5rem',
    fontSize: 20,
    margin: 20,
  },
  profilePicDisplayInstruction: { width: '35%', margin: 'auto' },
  profilePicDisplayAvatar: {
    textAlign: 'center',
    margin: '3rem auto',
    display: 'block',
    height: 250,
    width: 250,
    '& svg': { paddingTop: theme.spacing(2) },
  },
  profilePicDisplay: { height: 'auto' },
}));

export default useStyles;
