import React, { Component } from 'react';
import { observer } from 'mobx-react';
import FacilityStore from '../stores/FacilityStore';
import EldersDetailView from '../views/EldersDetailView';


class EldersDetailContainer extends Component {
  facilityStore = FacilityStore ;

  render() {
    const { elder} = this.facilityStore
    return (
      <div>
      <EldersDetailView elder={elder}   />

    </div>
    );
  }
}

export default observer(EldersDetailContainer);
