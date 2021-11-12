import { makeAutoObservable, runInAction } from 'mobx'


class Facility_AdminStore {

    facility = {id:"", location:"", number:""}
    facilities = []

    adminster = {id:"", facility_id:"", password:""}
    adminsters = []

    bed = {id:"", room_id:"" , camera_id:""}
    beds = []

    room = {id:"", facility_id:"" , room_loc:""}
    rooms = []

    constructor(){
      makeAutoObservable(this, {}, {autoBind:true})
    }

// 이동
    goBack(e){
            window.history.go(-1);
    }


}

export default new Facility_AdminStore();