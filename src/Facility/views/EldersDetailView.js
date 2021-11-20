import React, { Component } from 'react'
import FacilityStore from '../stores/FacilityStore';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function EldersDetailView() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const facilityStore = FacilityStore
  const { elder, goBack , room} = facilityStore;
  // const { elder, goBack} = this.props;



  return (
          <div>
            <Grid>
            <Typography id="modal-modal-title" variant="h6" component="h1">
                  이름 : {facilityStore.elder.name}
             </Typography>     

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  나이 : {elder.age} 
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  성별 : {elder.gender} 
              </Typography>  

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  특이사항 : {elder.sickness}  
              </Typography>   

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  주의사항 : {elder.recent_problem} 
              </Typography> <br/>

          {/* 이름 : {elder.name}<br/>
          나이 : {elder.age} <br/>
          성별 : {elder.gender} <br/>
          특이사항 : {elder.sickness} <br/>
          주의사항 : {elder.recent_problem} <br/> */}
 
                  <Button fullWidth onClick={()=>goBack()} >Exit</Button>
          </Grid> 
        </div>
    //  <div onClick={handleOpen}>
    //    <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
          // <Box sx={style}>
            //  <Typography id="modal-modal-title" variant="h6" component="h2">
            //       이름 : {facilityStore.elder.name}
            //  </Typography>     

            //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            //       나이 : {elder.age} 
            //   </Typography>

            //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            //       성별 : {elder.gender} 
            //   </Typography>  

            //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            //       특이사항 : {elder.sickness}  
            //   </Typography>   

            //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            //       주의사항 : {elder.recent_problem} 
            //   </Typography>
          //     <button onClick={()=>goBack()}>뒤로가기</button>
          //  </Box>
    //     </Modal> 

    //   </div>
  )
}


