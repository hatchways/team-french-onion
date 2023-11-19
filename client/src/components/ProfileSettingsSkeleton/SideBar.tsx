import { Container, Grid, Typography, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const SideBar = (): JSX.Element => {
  return (
    <Box mt={7}>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5].map((item) => (
          <>
            <Grid item xs={12}>
              <Skeleton style={{ margin: 'auto' }} variant="rect" width={170} height={30} />
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default SideBar;
