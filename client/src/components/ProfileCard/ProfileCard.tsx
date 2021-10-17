import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import picture from '../../Images/d9fc84a0d1d545d77e78aaad39c20c11d3355074.png';
import { Profile } from '../../interface/Profile';
import { Link } from 'react-router-dom';

interface Props {
  profile: Profile;
}

const ProfileCard = ({ profile }: Props): JSX.Element => {
  const classes = useStyles();
  const { _id: id, firstName, lastName, description, location } = profile;

  return (
    <Card
      component={Link}
      to={`/profile/${id}`}
      elevation={8}
      className={classes.profileCard}
      sx={{ minWidth: 245, maxWidth: 245, minHeight: 350, maxHeight: 350 }}
    >
      <CardContent>
        <Box height={310} display={'flex'} flexDirection={'column'}>
          <Box flexGrow={1}>
            <img className={classes.picture} src={picture} />
            <Typography gutterBottom variant="h5" component="div">
              {`${firstName} ${lastName}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
          <Box display={'flex'} p={1} mt={5} justifyContent={'space-evenly'} className={classes.infoWrapper}>
            <Typography>{location}</Typography>
            <Typography>{`30/hr`}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
