import {makeAutoObservable, runInAction} from 'mobx'
// import Facility_AdminStore from '../../Facility_Admin/stores/Facility_AdminStore'
import FacilityApi from '../api/FacilityApi'

class FacilityStore {

        room = {id:"1", room_loc:""}
        rooms = []

    
        bed = {id:"", room_id:""}
        beds = []


        elder = {id:"", room_id:"", bed_id:"", name:"", age:"", gender:"", sickness:"", recent_problem:""}
        elders = []

        elderStatus={id:"", elder_id:"", time:"", lay:"", sit:"", empty:"", recent_status:"", today_status:"", max_status:""}
        elderStatuses = []

    

    constructor(){
      makeAutoObservable(this, {}, {autoBind:true})
    }

    async selectFacilityRoom(){
            // 시설에 맞는 병실들 가져오기 
        try{
                const results =  await FacilityApi.facilityRoomList();
                runInAction(()=> this.rooms = results) //병실 리스트 
                console.log(results)
         }catch(error){
                 console.log(error)
         }
    }

    async selectFacilityDetail(){
            // room id에 맞는 환자 리스트 뿌리기
            try{
                const results =  await FacilityApi.facilityDetail(this.room.id);
                runInAction(()=> this.elders = results) // 병실들 (rooms) 가져오기 ,,,
                console.log(results)
         }catch(error){
                 console.log(error)
         }
    } 


// 이동
    goBack(e){
            window.history.go(-1);
    }

    goFacilityDetail(room_id){
            window.location.href = `/facility/rooms/${room_id}/`;        
    }

    goElderDetail(room_id, elder_id){
            window.location.href = `/facility/rooms/${room_id}/elder/${elder_id}/`;
    }
}

export default new FacilityStore();