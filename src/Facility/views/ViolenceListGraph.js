import React, { Component } from 'react';

import FacilityStore from '../stores/FacilityStore';

import { Bar, Line } from 'react-chartjs-2';

class ViolenceListGraph extends Component {
  render() {
    const facilityStore = FacilityStore
    const { violenceList } = facilityStore;

    let date_list = [];
    let x_list = [];
    let data_list = [];

    let current = new Date();
    let date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    let last_date = new Date(current.setDate(current.getDate() - 7));
    let min_date = `${last_date.getFullYear()}-${last_date.getMonth() + 1}-${last_date.getDate()}`;
    let min = new Date(min_date);

    violenceList.map(v => {
      let date = v.time.split('T')[0];
      let ch = new Date(date);

      if (ch > min) {
        if (date in date_list) {
          date_list[date].push(1);
        } else {
          date_list[date] = new Array(1);
          x_list.push(date);
        }
      }
    })

    x_list.map(x => {
      data_list.push(date_list[x].length);
    })


    const state = {
      labels: x_list,
      datasets: [{
        label: "toady_violence",
        data: data_list,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1

      }]
    }


    return (<>
      {console.log({ min_date })}

      <Line data={state} options={{
        title: {
          display: true,
          text: '폭력 패턴',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        },
      }} />
    </>

    );
  }
}

export default ViolenceListGraph;