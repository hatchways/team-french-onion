import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarWrapper: {
    borderRadius: '50%',
    border: '2px solid #ccc',
    transition: 'all .4s',
    '&:hover': {
      transform: 'scale(1.06)',
      boxShadow: '-1px 3px 21px -5px rgba(0,0,0,0.75)',
    },
  },
}));

export default useStyles;
