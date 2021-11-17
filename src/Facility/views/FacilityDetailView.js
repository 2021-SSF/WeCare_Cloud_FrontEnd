import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default class FacilityDetailView extends Component {

    componentDidMount(){
    this.props.selectFacilityDetail();
  }

  render() {
    const { elders, goBack, selectFacilityDetail } = this.props;

    const elderList = elders.map(elder => {
        return (
          <Grid key={elder.id} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}> 
                              {/* sx={{ flexGrow: 1 }} */}
                        <CardActionArea>
                          <CardContent sx={{ flexGrow: 1 }}>

                            <Typography gutterBottom variant="h2" component="div">
                            이름 : {elder.name}
                            </Typography><br/>

                            <Typography gutterBottom variant="h4" color="text.secondary">
                            나이 : {elder.age} 
                            </Typography>

                            <Typography gutterBottom variant="h4"  color="text.secondary">
                            성별 : {elder.gender} 
                            </Typography>

                            <Typography gutterBottom variant="h4"  color="text.secondary">
                            특이사항 : {elder.sickness} 
                            </Typography>

                            <Typography gutterBottom variant="h4" color="text.secondary">
                            주의사항 : {elder.recent_problem} 
                            </Typography>

                          </CardContent>
                        </CardActionArea>
                  </Card> <br/>

          </Grid>
        )});
  
    return (
      <div>
       <h1> 병실 : </h1> <br/> <br/> <br/>
            {elderList}
        <button onClick={() => goBack()}> 뒤로가기 </button>
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
