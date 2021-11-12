import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class FacilityRoomListView extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { room } = this.props;
    return (
      <div>
  
        병실 id : {room.id} <br/>
        병실 :{room.room_loc} <br/><br/>
      </div>
    );
  }
}
