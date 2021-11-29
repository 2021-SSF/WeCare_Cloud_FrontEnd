import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          여기에 뭐가써지니
          {/* <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
          </Grid> */}

          {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
          </Grid> */}

        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
