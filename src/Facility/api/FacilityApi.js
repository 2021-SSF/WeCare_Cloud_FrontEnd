import axios from 'axios'

class FacilityApi{
    URL = '/api/facility/';

    facilityRoomList(){ // '<str:facility_id>/'
    
        return axios.get(this.URL)
                .then((response)=>response.data);
    }

    facilityDetail(room_id){   // '<str:facility_id>/room/<int:room_id>/'
        return axios.get(this.URL + `rooms/${room_id}/`)
                    .then((response)=>response.data);
    }

    elderDetail(room_id , elder_id){
        return axios.get(this.URL + `rooms/${room_id}/elder/${elder_id}/`)
                    .then((response)=>response.data);
    }

    // elderStatus_Create()

}

export default new FacilityApi();