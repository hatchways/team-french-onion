import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import picture from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import { Profile } from '../../interface/Profile';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface Props {
  profile: Profile;
}

const ProfileCard = ({ profile }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Card elevation={8} sx={{ maxWidth: 220, marginX: 'auto' }}>
      <CardMedia className={classes.picture} image={picture} title="siiter avatar" />{' '}
      <CardContent sx={{ paddingTop: 0 }}>
        <Typography variant="subtitle1">{`${profile.firstName} ${profile.lastName}`}</Typography>
        <Typography variant="caption" color="text.secondary">
          {profile.description}
        </Typography>
      </CardContent>
      <Box className={classes.infoWrapper}>
        <Box display="flex" alignItems="center">
          <LocationOnIcon sx={{ color: '#fd513e' }} />
          <Typography variant="caption">{profile.location}</Typography>
        </Box>
        <Typography variant="caption">$14/hr</Typography>
      </Box>
    </Card>
  );
};

export default ProfileCard;
