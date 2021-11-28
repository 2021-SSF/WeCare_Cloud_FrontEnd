import React, { Component } from 'react';

import FacilityStore from '../stores/FacilityStore';
var CanvasJSReact = require('../../canvas/canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class StatusGraphView extends Component {
  render() {
    const facilityStore = FacilityStore
    const {elderStatuses}= facilityStore;

    let t_list =[];
    let t ={label:"",x:"",y:""}
    
    let current = new Date();
    let date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}-`;
    
    elderStatuses.map(e => {
      t.label=e.today_status;
      t.x=date.concat(e.time);
      (e.today_status==="lay") ? (t.y=1) : (e.today_status==="sit"? t.y=2 :t.y=3);
      t_list.push(t);
      t ={label:"",x:"",y:""}
    })
    
    const options = {
			title: {
				text: "Basic Column Chart"
			},
			data: [
			{
				type: "column",
				dataPoints: t_list
			}
			]
		}
    return (
      <div>
        {console.log({t_list})}
        {/* <CanvasJSChart options = {options}/> */}
      </div>
    );
  }
}

export default StatusGraphView;