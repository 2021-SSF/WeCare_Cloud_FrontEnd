import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import FacilityDetailContainer from '../containers/FacilityDetailContainer';

const FacilityDetailDashboard = () => (
  <>
    <Helmet>
      <title>FacilityRoomList</title>
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
          // spacing={3}
        >
        <FacilityDetailContainer/>
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

export default FacilityDetailDashboard;
