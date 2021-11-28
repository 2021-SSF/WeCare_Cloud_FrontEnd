import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
}

const Graph = ({ s_list }) => {
  const data = {
    datasets: [
      {
        data:s_list
      }
    ]
  };
  return (
    <Bar 
        data={data}
        width={300}
        height={200}
        options={options}
    />
);
};