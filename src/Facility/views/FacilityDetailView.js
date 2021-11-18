import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacilityStore from '../stores/FacilityStore';


export default class FacilityDetailView extends Component {

    facilityStore = FacilityStore ;

  //   componentDidMount(){
  //   this.facilityStore.selectFacilityDetail();
  // }

  render() {
    const { elders, room, goElderDetail , selectElderDetail} = this.props;

    const elderList = elders.map(elder => {
        return (
          <Grid key={elder.id} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} onClick={() => selectElderDetail(elder)}> 
                              {/* sx={{ flexGrow: 1 }} */}
                        <CardActionArea>
                          <CardContent sx={{ flexGrow: 1 }}>

                            <Typography gutterBottom variant="h2" component="div">
                            이름 : {elder.name}
                            </Typography><br/><br/>

                            <Typography gutterBottom variant="h4" color="text.secondary">
                            나이 : {elder.age} <br/><br/>
                            </Typography>

                            <Typography gutterBottom variant="h4"  color="text.secondary">
                            성별 : {elder.gender} <br/><br/>
                            </Typography>

                            <Typography gutterBottom variant="h4"  color="text.secondary">
                            특이사항 : {elder.sickness} <br/><br/>
                            </Typography>

                            <Typography gutterBottom variant="h4" color="text.secondary">
                            주의사항 : {elder.recent_problem} <br/><br/>
                            </Typography>

                          </CardContent>
                        </CardActionArea>
                  </Card> <br/>

          </Grid>
        )});
  
    return (
      
      <div>
        {/* <h1> 병실 : </h1> <br/> <br/> <br/> */}
            {elderList} 
        {/* <button onClick={() => goBack()}> 뒤로가기 </button> */}
{/* <Container maxWidth={false}>
     
   </Container> */}
{/* 
       <TableRow>
         <TableCell> 병실 id : {room.id} </TableCell>
         <TableCell> 병실 :{room.room_loc} </TableCell>
       </TableRow> */}
      </div>
      
    );
  }
}
