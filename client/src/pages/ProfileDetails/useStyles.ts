import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  paperItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 450,
    margin: '3rem auto',
    padding: 7,
    '& img.image-gallery-image': { height: '56vh' },
  },
  headerText: {
    position: 'relative',
    paddingTop: 20,
    '::before': {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      content: 'fffff',
      background: '#FD513E',
      height: 10,
      width: 160,
    },
  },
}));

export default useStyles;
