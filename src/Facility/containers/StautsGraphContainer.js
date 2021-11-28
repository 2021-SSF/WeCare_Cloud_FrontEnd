import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TextField from '@mui/material/TextField';
import FacilityStore from '../stores/FacilityStore';
import StatusGraphViewM from '../views/StatusGraphViewM.js';
class ViolenceGraphContainer extends Component{
  facilityStore = FacilityStore ;
  // facility_AdminStore = Facility_AdminStore

  componentDidMount(){
    this.facilityStore.getElderStatus();
  }

  render() {
    const {elder, elderStatuses} = this.facilityStore
    const test = elderStatuses.map(s =>{
      return(
        <div>
          <StatusGraphViewM elderStatuses ={elderStatuses} elder={elder}/>
        </div>
      )
    })
    
    return (
      <div>
       {test}
      </div>
    );
  }
}

export default observer(ViolenceGraphContainer);
