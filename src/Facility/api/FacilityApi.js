import axios from 'axios'

class FacilityApi{
    URL = 'api/facility/';

    facilityRoomList(){
        return axios.get(this.URL)
                .then((response)=>response.data);
    }

    facilityDetail(facility_id, room_id ){   // '<str:facility_id>/room/<int:room_id>/'
        return axios.get(this.URL + `${facility_id}/room/${room_id}/`)
                    .then((response)=>response.data);
    }

    eldersAdd(){

    }

    dietAdd(){

    }

    eldersUpdate(){

    }
    
    eldersDelete(facility_id, elders_id ){ // '<str:facility_id>/elders/delete/<str:elders_id>/'
        return axios.delete(this.URL + `${facility_id}/elders/delete/${elders_id}/`)
                    .then((response)=>response.data);

    }
}

export default new FacilityApi();