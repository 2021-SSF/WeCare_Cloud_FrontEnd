import React, { Component } from 'react';
import FacilityStore from '../stores/FacilityStore';
import {Bar, Line} from 'react-chartjs-2';
// import faker from 'faker';

class StatusGraphViewM extends Component {
  render() {
    const facilityStore = FacilityStore
    const {elderStatuses}= facilityStore;
    const option = {
      plugins :{
        tooltip :{
          callbacks :{
            label : function(context) {

            }
          }
        }
      },
      scales : {
        y : {
          ticks : {
            callback : function(value) {
              return (value === 3) ? 'Empty' : (value === 2) ? 'Sit' : 'Lay'
            }
          }
        }
      }
    }

    let test_list =['lay','empty','sit']


    let data_list =[];
    let x_list =[]
    let avg_list =[]

    let current = new Date();
    let date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}-`;
    let d=0
    let a=0

    elderStatuses.map(e => {
      
      x_list.push(date.concat(e.time));
      
      
      (e.today_status==="lay") ? (d=1) : (e.today_status==="sit"? d=2 :d=3);
      data_list.push(d);
      
      (e.max_status==="lay") ? (a=1) : (e.max_status==="sit"? a=2 : a=3);
      avg_list.push(a)
    })

    const state ={
      labels : x_list,
      datasets:[
        { label:'today_staus',
          data:data_list,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        
          { label:'avg_staus',
            data:avg_list,
            fill: false,
            borderColor: 'rgb(52, 152, 219)',
            tension: 0.1,
          
        }
      ]
    }

    

    
    return (
      <div>
        <Line  data={state}  options={{
            title:{
              display:true,
              text:'오늘 하루 수면 패턴',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
          }}/>
      </div>
    );
  }
}

export default StatusGraphViewM;