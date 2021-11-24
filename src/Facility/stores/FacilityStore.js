import { makeAutoObservable, runInAction } from 'mobx'
// import Facility_AdminStore from '../../Facility_Admin/stores/Facility_AdminStore'
import FacilityApi from '../api/FacilityApi'

class FacilityStore {

        room = { id: "", room_loc: "" }
        rooms = []


        bed = { id: "", room_id: "" }
        beds = []


        elder = { id: "", room_id: "", bed_id: "", name: "", age: "", gender: "", sickness: "", recent_problem: "" }
        elders = []

        elderStatus = { id: "", elder_id: "", time: "", lay: "", sit: "", empty: "", recent_status: "", today_status: "", max_status: "" }
        elderStatuses = []

        violence ={id:"",bed_id:"",time:""};
        violenceList =[];

        // elederNumber = this.elder.length()


        constructor() {
                makeAutoObservable(this, {}, { autoBind: true })
        }

        async selectFacilityRoom() {
                // 시설에 맞는 병실들 가져오기 
                try {
                        const results = await FacilityApi.facilityRoomList();
                        runInAction(() => this.rooms = results) //병실 리스트 
                        console.log(results)
                } catch (error) {
                        console.log(error)
                }
        }

        async selectFacilityDetail(room) {
                // room id에 맞는 환자 리스트 뿌리기
                try {
                        // this.room.id = room_id;
                        const results = await FacilityApi.facilityDetail(room.id);
                        runInAction(() => this.elders = results)
                        console.log(results)
                } catch (error) {
                        console.log(error)
                }
        }

        async selectElderDetail(elder) {
                //room_id와 환자id에 맞는 환자의 상세정보 뿌리기 
                try {
                        const result = await FacilityApi.elderDetail(elder.id);
                        runInAction(() => this.elder = result)
                        console.log(result)
                } catch (error) {
                        console.log(error)
                }


        }
        async getElderStatus(){
                // 환자 상태 정보
                try{
                        const status = await FacilityApi.elderStatus(this.elder.id)
                        runInAction(() => this.elderStatuses = status)
                        console.log(status)

                }catch(error){
                        console.log(error);
                }
        }
        async getViolence(){
                // 방별 폭력 그래프
                try{
                        const fight = await FacilityApi.getViolence(this.room.id)
                        runInAction(() => this.violenceList = fight)
                        console.log(fight)

                }catch(error){
                        console.log(error);
                }
        }

        //     async selectElderDetail(room, elder){
        //         //room_id와 환자id에 맞는 환자의 상세정보 뿌리기 
        //         try{
        //             room.id = elder.room_id    
        //             const result =  await FacilityApi.elderDetail(room.id, elder.id);
        //             runInAction(()=> this.elder = result) 
        //             console.log(result)
        //      }catch(error){
        //              console.log(error)
        //      }
        // }

        //     async selectFacilityDetail(room_id){
        //         // room id에 맞는 환자 리스트 뿌리기
        //         try{
        //             // this.room.id = room_id;
        //             const results =  await FacilityApi.facilityDetail(this.room.id);
        //             runInAction(()=> this.elders = results) 
        //             console.log(results)
        //      }catch(error){
        //              console.log(error)
        //      }
        // }


        // async selectElderDetail(room_id, elder_id){
        //         // room id에 맞는 환자 리스트 뿌리기
        //         try{
        //             // this.room.id = room_id;
        //             const results =  await FacilityApi.elderDetail(room_id, elder_id);
        //             runInAction(()=> this.elders = results) 
        //             console.log(results)
        //      }catch(error){
        //              console.log(error)
        //      }
        // } 

        // 이동
        goBack(e) {
                window.history.go(-1);
        }

        //     goFacilityDetail(room_id){
        //         //     this.room.id = room_id;
        //             window.location.href = `/facility/rooms/${room_id}/`;        
        //     }

        //     goFacilityDetail(room){
        //             room.id = this.room.id
        //             window.location.href = `/facility/rooms/${room.id}/`;
        //     }

        goElderDetail(room_id, elder_id) {
                window.location.href = `/facility/rooms/${room_id}/elder/${elder_id}/`;
        }


}

export default new FacilityStore();