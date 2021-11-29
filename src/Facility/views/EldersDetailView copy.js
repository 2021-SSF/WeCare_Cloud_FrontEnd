import React, { Component } from 'react'
import FacilityStore from '../stores/FacilityStore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default class EldersDetailView extends Component {
  facilityStore = FacilityStore ;

  // componentDidMount(){
  //   this.facilityStore.selectElderDetail();
  // }

  render() {
    const { elder, goBack, selectElderDetail } = this.props;

    return (
      <div>
        이름 : {elder.name}
        나이 : {elder.age} 
        성별 : {elder.gender} 
        특이사항 : {elder.sickness} 
        주의사항 : {elder.recent_problem} 

      </div>
    )
  }
}

