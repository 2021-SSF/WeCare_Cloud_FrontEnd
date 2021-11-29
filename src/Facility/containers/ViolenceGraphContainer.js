import React, { Component } from 'react';
import { observer } from 'mobx-react';

import TextField from '@mui/material/TextField';
import FacilityStore from '../stores/FacilityStore';
// import test from '../views/test';
import ViolenceListGraph from '../views/ViolenceListGraph';

class ViolenceGraphContainer extends Component{
  facilityStore = FacilityStore ;
  // facility_AdminStore = Facility_AdminStore

  componentDidMount(){
    this.facilityStore.selectFacilityRoom();
    this.facilityStore.getViolence(this.room);
  }

  render() {
    const { violenceList} = this.facilityStore
    
    
    return (
      <div>
       <ViolenceListGraph violenceList={violenceList}/>
       
      </div>
    );
  }
}

export default observer(ViolenceGraphContainer);
