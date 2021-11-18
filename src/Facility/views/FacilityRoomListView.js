import React, { Component } from 'react';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';


// eslint-disable-next-line react/prefer-stateless-function
export default class FacilityRoomListView extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { room, goFacilityDetail, selectFacilityDetail , seperateBoard  } = this.props;
    return (
      <Grid>
      <div>

      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => selectFacilityDetail(room)}> 
      
      {/* <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => seperateBoard(room.id)}>  */}
      {/* <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => goFacilityDetail(room.id)}>  */}

        {/* sx={{ flexGrow: 1 }} */}
   <CardActionArea>
     <CardContent sx={{ flexGrow: 1 }}>
       <Typography gutterBottom variant="h5" component="div">
       병실 : {room.room_loc}
       </Typography><br/>
       <Typography variant="body2" color="text.secondary">
      인원 : 
       </Typography>
     </CardContent>
   </CardActionArea>
 </Card> <br/>

   </div>
   </Grid>
      // <TableRow>
      //   <TableCell> 병실 id : {room.id} </TableCell>
      //   <TableCell> 병실 :{room.room_loc} </TableCell>
      // </TableRow>

    );
  }
}
