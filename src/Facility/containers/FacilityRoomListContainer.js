import React, { Component } from 'react';
import { observer } from 'mobx-react';
import FacilityRoomListView from '../views/FacilityRoomListView';
import FacilityStore from '../stores/FacilityStore';
// import Facility_AdminStore from '../../Facility_Admin/stores/Facility_AdminStore';


// eslint-disable-next-line react/prefer-stateless-function
class FacilityRoomListContainer extends Component {
  facilityStore = FacilityStore ;
  // facility_AdminStore = Facility_AdminStore

  componentDidMount(){
    this.facilityStore.selectFacilityRoom();
  }

  render() {
    const { rooms } = this.facilityStore
    const roomList = rooms.map(room => {
      return (
        <FacilityRoomListView key={room.id} room={room} />
      )
    });
    return (
      <div>
       {roomList}
      </div>
    );
  }
}

export default observer(FacilityRoomListContainer);
