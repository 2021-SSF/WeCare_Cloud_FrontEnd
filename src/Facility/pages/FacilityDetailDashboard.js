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
        {/* <Grid
          container
          // spacing={3}
        > */}
        <FacilityDetailContainer/>
          

        {/* </Grid> */}
      </Container>
    </Box>
  </>
);

export default FacilityDetailDashboard;
