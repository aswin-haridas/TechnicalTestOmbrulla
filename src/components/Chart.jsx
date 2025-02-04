import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 60000,
      beginAtZero: true,
    },
  },
};
const labels = ["16 January", "14 January", "12 January", "10 January", "8 January"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [35000, 42000, 31000, 35000, 40000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [35000, 35000, 37000, 37000, 40000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Chart = () => {
  return (
    <>
      <h4>Total Energy Consumption(Wh)</h4>
      <ChartContainer>
        <Line options={options} data={data} />
      </ChartContainer>
    </>
  );
};

export default Chart;

const ChartContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 1px solid rgb(211, 211, 211);
  width: 700px;
  height: 400px;
`;
