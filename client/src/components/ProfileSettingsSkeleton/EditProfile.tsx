import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import SideBar from './SideBar';

const EditProfile = (): JSX.Element => {
  const centeralize = {
    margin: 'auto',
  };

  return (
    <>
      <Box marginX="auto" width={900}>
        <Grid container>
          <Grid item xs={4}>
            <SideBar />
          </Grid>
          <Grid item xs={8}>
            <Box mt={5} width={600}>
              <Grid container spacing={3}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <>
                    {' '}
                    <Grid key={item} item xs={3}>
                      <Skeleton
                        style={centeralize}
                        variant="rect"
                        width={150}
                        height={item === 0 || item === 9 ? 0 : 42}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Skeleton
                        style={centeralize}
                        variant="rect"
                        width={item === 0 || item === 9 ? 180 : 400}
                        height={item === 8 ? item + 120 : 52}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default EditProfile;
