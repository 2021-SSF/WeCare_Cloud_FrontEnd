import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TextField from '@mui/material/TextField';
import FacilityStore from '../stores/FacilityStore';
class ViolenceGraphContainer extends Component{
  facilityStore = FacilityStore ;
  // facility_AdminStore = Facility_AdminStore

  componentDidMount(){
    this.facilityStore.selectFacilityRoom();
    this.facilityStore.getViolence(this.room);
  }

  render() {
    const { violenceList} = this.facilityStore
    const test = violenceList.map(v =>{
      return(
        <TextField
          required
          id={v.id}
          label="Required"
          defaultValue={v.time}
        />
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
