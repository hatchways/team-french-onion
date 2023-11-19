import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 30,
    paddingBottom: 30,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  dashboard: { backgroundColor: '#FFFFFF' },
  drawerWrapper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
  },
  searchWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 40,
    textAlign: 'center',
  },
  listingsWrapper: {
    marginTop: 50,
    maxWidth: 980,
  },
  listingItem: {
    textAlign: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
