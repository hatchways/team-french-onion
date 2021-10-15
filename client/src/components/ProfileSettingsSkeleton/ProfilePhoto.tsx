import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import SideBar from './SideBar';

const instructionLines = { id: 3, width: 400, height: 30 };
const contentsProperties = [
  { id: 1, width: 170, height: 30 },
  { id: 2, width: 200, height: 200 },
  instructionLines,
  instructionLines,
  { id: 4, width: 300, height: 100 },
];

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
            {contentsProperties.map((content, index) => {
              return (
                <Box marginY={3} key={content.id}>
                  <Skeleton
                    style={{ margin: 'auto' }}
                    variant={index === 1 ? 'circle' : 'rect'}
                    width={content.width}
                    height={content.height}
                  />
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePhoto;
