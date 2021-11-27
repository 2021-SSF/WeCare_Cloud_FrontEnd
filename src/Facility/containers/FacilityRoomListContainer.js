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
    const { rooms, goFacilityDetail , selectFacilityDetail , seperateBoard , elders , getViolence} = this.facilityStore
    const roomList = rooms.map(room => {
      return (
        <FacilityRoomListView key={room.id} room={room} elders={elders} seperateBoard={seperateBoard} goFacilityDetail={goFacilityDetail} selectFacilityDetail={selectFacilityDetail} getViolence={getViolence}/>
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
