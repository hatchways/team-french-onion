import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    background: '#ffeeec',
    padding: '0 2rem',
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      padding: 5,
      borderRadius: '50%',
      backgroundColor: colors.green[200],
    },
  },
  appBarButtons: {
    color: '#fd513e',
    fontSize: 15,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3);',
    },
  },
}));

export default useStyles;
