import axios from 'axios'

class FacilityApi{
    URL = '/api/facility/';

    facilityRoomList(){ // '<str:facility_id>/'
    
        return axios.get(this.URL)
                .then((response)=>response.data);
    }

    facilityDetail( room_id ){   // '<str:facility_id>/room/<int:room_id>/'
        return axios.get(this.URL + `/room/${room_id}/`)
                    .then((response)=>response.data);
    }

    eldersAdd(){

    }

    dietAdd(){

    }

    eldersUpdate(){

    }
    
    eldersDelete(elders_id ){ // '<str:facility_id>/elders/delete/<str:elders_id>/'
        return axios.delete(this.URL + `/elders/delete/${elders_id}/`)
                    .then((response)=>response.data);

    }
}

export default new FacilityApi();