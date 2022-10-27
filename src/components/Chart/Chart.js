import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {

  const state = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Purchase Data',
        backgroundColor: '#37B04C',
        borderColor: '#37B04C',
        borderWidth: 2,
        data: data
      }
    ]
  }

  return (
    <>
      <Bar
        data={state}
        options={{
          legend:{
            display: true,
            position: 'right'
          }
        }}
      />
    </>
  )
}

export default BarChart;