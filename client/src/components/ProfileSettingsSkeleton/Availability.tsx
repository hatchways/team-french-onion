import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import SideBar from './SideBar';

const ProfilePhoto = (): JSX.Element => {
  const centeralize = {
    margin: 'auto',
  };
  return (
    <Box marginX="auto" width={900}>
      <Grid container>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <Box mt={5} width={600}>
            <Box marginBottom={5}>
              <Skeleton style={centeralize} variant="text" width={230} height={52} />
            </Box>

            <Grid container>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <>
                  <Grid item xs={6}>
                    <Skeleton style={centeralize} variant="text" width={200} height={item === 1 ? 52 : 75} />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton style={centeralize} variant="text" width={130} height={item === 1 ? 0 : 75} />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton style={centeralize} variant="text" width={130} height={item === 1 ? 0 : 75} />
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePhoto;
