import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
  },
  appBarButtonsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minWidth: 400,
  },
  appBarButtons: {
    fontFamily: 'Arial',
    fontSize: 14,
    padding: 5,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3);',
      textDecoration: 'underline',
    },
  },
  profileIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },
}));

export default useStyles;
