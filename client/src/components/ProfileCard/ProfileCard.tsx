import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import picture from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import { Profile } from '../../interface/Profile';

interface Props {
  profile: Profile;
}

const ProfileCard = ({ profile }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Card elevation={8} sx={{ minWidth: 245, maxWidth: 245, border: 2 }}>
      <Box>
        <img className={classes.picture} src={picture} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${profile.firstName} ${profile.lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profile.description}
        </Typography>
      </CardContent>
      <Box className={classes.infoWrapper}>
        <Typography>{profile.location}</Typography>
        <Typography>$14/hr</Typography>
      </Box>
    </Card>
  );
};

export default ProfileCard;
