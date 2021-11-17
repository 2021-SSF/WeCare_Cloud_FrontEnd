import React, { Component } from 'react';
import { observer } from 'mobx-react';
import FacilityStore from '../stores/FacilityStore';
import FacilityDetailView from '../views/FacilityDetailView';


class FacilityDetailContainer extends Component {
  facilityStore = FacilityStore ;

  // componentDidMount(){
  //   this.facilityStore.selectFacilityDetail();
  // }

  render() {
    const {elders , room , goBack,selectFacilityDetail} = this.facilityStore

    // const elderList = elders.map(elder => {
    //   return (
    //     <FacilityDetailView key={elder.id} elder={elder} room = {room} goBack = {goBack}/>
    //   )
    // });

    return (
      <div>
        <FacilityDetailView selectFacilityDetail= {selectFacilityDetail} elders={elders} goBack= {goBack} />
       {/* <h1> 병실 : </h1> <br/> <br/> <br/> */}
        {/* {elderList}  */}
        {/*환자 리스트 뿌려주는 곳*/}
        {/* <button onClick={() => goBack()}>뒤로가기</button> */}
      </div>
    )
  }
}

export default observer(FacilityDetailContainer);