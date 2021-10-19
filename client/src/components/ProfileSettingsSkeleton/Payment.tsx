import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import SideBar from './SideBar';

const contentsProperties = [
  { id: 1, width: 230, height: 52 },
  { id: 2, width: 280, height: 300 },
  { id: 3, width: 230, height: 100 },
];
const Payment = (): JSX.Element => {
  const centeralize = {
    margin: 'auto',
  };
  return (
    <Box marginX="auto" width={1000}>
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
              {contentsProperties.map((item) => (
                <>
                  <Grid item xs={6}>
                    <Skeleton style={centeralize} variant="text" width={item.width} height={item.height} />
                  </Grid>
                  <Grid item xs={6}>
                    <Skeleton
                      style={centeralize}
                      variant="text"
                      width={item.width}
                      height={item.id === 1 || item.id === 3 ? 0 : item.height}
                    />
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

export default Payment;
