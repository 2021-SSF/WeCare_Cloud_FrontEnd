import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import FacilityRoomListContainer from '../containers/FacilityRoomListContainer';
import FacilityDetailContainer from '../containers/FacilityDetailContainer';
import FacilityStore from '../stores/FacilityStore';

const facilityStore = FacilityStore
const FacilityRoomListDashboard = () => (
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
          <FacilityRoomListContainer />
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
        {/* {(facilityStore.room.id !== undefined && facilityStore.room.id > 0) && <FacilityDetailContainer/>} */}
        <FacilityDetailContainer/>
      </Container>
    </Box>
  </>
);

export default FacilityRoomListDashboard;
