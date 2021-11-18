import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import FacilityRoomListContainer from '../containers/FacilityRoomListContainer';
import FacilityDetailContainer from '../containers/FacilityDetailContainer';
import FacilityStore from '../stores/FacilityStore';
import EldersDetailContainer from '../containers/EldersDetailContainer';

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

        <Grid container spacing={3}>

          <Grid item xs={3} sm={3}>
          <FacilityRoomListContainer />
          </Grid>
          
          <Grid item xs={9} sm={9}>
          <FacilityDetailContainer/>
          </Grid>
{/* 
          <Grid item xs={9} sm={9}>
          <EldersDetailContainer/>
          </Grid> */}

        </Grid>

      </Container>
    </Box>
  </>
);

export default FacilityRoomListDashboard;
