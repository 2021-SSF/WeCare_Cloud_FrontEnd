
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import FacilityRoomListView from '../views/FacilityRoomListView';
import FacilityStore from '../stores/FacilityStore';
// import Facility_AdminStore from '../../Facility_Admin/stores/Facility_AdminStore';


// eslint-disable-next-line react/prefer-stateless-function
class ViolenceGraphContainer extends Component {
  facilityStore = FacilityStore ;

  componentDidMount(){
    this.facilityStore.getViolence();
  }

  render() {
    const { rooms, room, getViolence, violenceList, violence} = this.facilityStore
    const ViolenceList = violenceList.map(violence => {
      return (
        <ViolenceGraphViews key={violence.id} violence={violence} room={room} rooms={rooms}/>
      )
    });
    return (
      <div>
       {ViolenceList}
      </div>
    );
  }
}

export default observer(ViolenceGraphContainer);
