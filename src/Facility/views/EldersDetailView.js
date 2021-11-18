import React, { Component } from 'react'
import FacilityStore from '../stores/FacilityStore';
import Grid from '@mui/material/Grid';


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

