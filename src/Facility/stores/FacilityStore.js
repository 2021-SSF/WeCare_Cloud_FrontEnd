import {makeAutoObservable, runInAction} from 'mobx'
// import Facility_AdminStore from '../../Facility_Admin/stores/Facility_AdminStore'
import FacilityApi from '../api/FacilityApi'

class FacilityStore {

        // // facility_AminStore = Facility_AdminStore
        // room = this.facility_AminStore.room
        // rooms = this.facility_AminStore.rooms
        // facility = this.facility_AminStore.facility
        // facilities = this.facility_AminStore.facilities

        facility = {id:"", name:"", location:"", number:""}
        facilities = []

        // room = {id:"", facility_id:"" , room_loc:""}
        room = {id:"", room_loc:""}
        rooms = []

        adminster = {id:"", facility_id:"", password:""}
        adminsters = []
    
        bed = {id:"", room_id:"" , camera_id:""}
        beds = []

        nurse = { id:"",
              admin_id:"",
              name:"",
              password:"",
              phone:"", 
            }

        nurses = []


        elder = {id:"", 
                nurse_id:"", 
                bed_id:"", 
                name:"", 
                age:"", 
                gender:"", 
                note:"", 
                companion_num:"", 
                companion_relation:""}
        
        elders = []

        diet = {id:"", 
                nurse_id:"", 
                image:"", 
                time:""}

        diets = []

    

    constructor(){
      makeAutoObservable(this, {}, {autoBind:true})
    }

    async selectFacilityRoom(){
            // 시설 id에 맞는 병실들 가져오기 
        try{
                const results =  await FacilityApi.facilityRoomList();
                runInAction(()=> this.rooms = results) // 병실들 (rooms) 가져오기 ,,,
                console.log(results)
         }catch(error){
                 console.log(error)
         }
    }

//     async selectFacility(facility_id, room_id){
//             const 
//     }

    async eldersDelete(){
            try{
                    await FacilityApi.eldersDelete(this.facility.id, this.room.id);
                    this.selectFacility();
            }catch(error){
                    this.message = error.message
            }
    }

// 이동
    goBack(e){
            window.history.go(-1);
    }


}

export default new FacilityStore();