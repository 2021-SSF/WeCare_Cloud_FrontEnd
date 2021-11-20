import React, { Component } from 'react';
import {observer} from 'mobx-react';
import FacilityStore from '../stores/FacilityStore';
import FacilityDetailContainer from '../containers/FacilityDetailContainer';

class SeperateBoardList extends Component {
    facilityStore = FacilityStore
    
    componentDidMount(){
        this.facilityStore.selectFacilityDetail(this.props.match.params.room.id);
    }

    render() {
        
        return (
            <div>
            
               {(this.facilityStore.room.id !== undefined && this.facilityStore.room.id > 0) && <FacilityDetailContainer/>}
                </div>
            
        );
    }
}

export default observer(SeperateBoardList);