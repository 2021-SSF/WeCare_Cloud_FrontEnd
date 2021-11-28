import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FacilityStore from '../stores/FacilityStore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EldersDetailContainer from '../containers/EldersDetailContainer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function FacilityDetailView() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const facilityStore = FacilityStore
  const { elders, room, goElderDetail , selectElderDetail, violenceList} = facilityStore
  const elderList = elders.map(elder => {
    return (
      <Grid key={elder.id} xs={12} sm={6} md={4} onClick={handleOpen}>
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

      {elderList}
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <EldersDetailContainer/>
        </Box>
      </Modal>
    </div>
  )
};