import axios from 'axios'

class FacilityApi{
    URL = '/api/facility/';

    facilityRoomList(){ // ''
    
        return axios.get(this.URL)
                .then((response)=>response.data);
    }

    facilityDetail(room_id){   // 'rooms/<int:room_id>/'
        return axios.get(this.URL + `rooms/${room_id}/`)
                    .then((response)=>response.data);
    }

    elderDetail(elder_id){
        return axios.get(this.URL + `elder/${elder_id}/`)
                    .then((response)=>response.data);
    }py

    // 사고 그래프를 위한 데이터

    incidentList(room_id){
        return axios.get(this.URL +`incidents/${room_id}/`)
                    .then((response)=>response.data);
    }

    elderStatus(elder_id){
        return axios.get(this.URL +`elders_status/${elder_id}/`)
                    .then((response)=>response.data);
        
    }
    // elderDetail(room_id , elder_id){
    //     return axios.get(this.URL + `rooms/${room_id}/elder/${elder_id}/`)
    //                 .then((response)=>response.data);
    // }

    // elderStatus_Create()

}

export default new FacilityApi();