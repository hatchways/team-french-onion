import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      padding: 5,
      borderRadius: '50%',
      backgroundColor: colors.green[200],
    },
  },
  appBarButtons: {
    fontFamily: 'Arial',
    fontSize: 20,
    padding: 15,

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3);',
      textDecoration: 'underline',
    },
  },
}));

export default useStyles;
