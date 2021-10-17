import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 100,
  },
  image: {
    minWidth: 500,
    maxWidth: 500,
    maxHeight: 500,
    minHeight: 500,
  },
  paperItem: {
    marginTop: 35,
    marginLeft: 65,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerText: {
    paddingTop: 20,
  },
  arrowRight: {
    position: 'absolute',
    fontSize: 50,
    right: 0,
    top: 200,
    '&:hover': {
      backgroundColor: 'rgb(0,0,0,0.2)',
    },
  },
  arrowLeft: {
    position: 'absolute',
    fontSize: 50,
    left: 0,
    top: 200,
    '&:hover': {
      backgroundColor: 'rgb(0,0,0,0.2)',
    },
  },
}));

export default useStyles;
