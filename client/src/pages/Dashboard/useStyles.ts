import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
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
    marginTop: 50,
  },
  searchText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  listingsWrapper: {
    marginTop: 50,
  },
  listingItem: {
    textAlign: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
