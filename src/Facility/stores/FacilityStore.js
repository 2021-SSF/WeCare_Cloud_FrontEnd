import {makeAutoObservable, runInAction} from 'mobx'

class FacilityStore {
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

}

export default new FacilityStore();