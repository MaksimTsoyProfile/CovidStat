import Chart from 'chart.js';

let myChart = null;
let myChartActive = null;
let myChartRecovered = null;
const chart = ({
  mounthsDeath, mounthsDate, mounthsActive, mounthsRecovered,
}) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  if (myChart !== null) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: mounthsDate,
      datasets: [{
        label: 'Deaths',
        backgroundColor: '#8285d6',
        borderColor: '#8285d6',
        data: mounthsDeath,
      }],
    },
    options: {
      legend: {
        labels: {
          fontColor: 'white',
          color: 'white',
        },
      },
    },
  });
  const ctxActive = document.getElementById('myChartActive').getContext('2d');
  if (myChartActive !== null) {
    myChartActive.destroy();
  }
  myChartActive = new Chart(ctxActive, {
    type: 'line',
    data: {
      labels: mounthsDate,
      datasets: [{
        label: 'Actives',
        backgroundColor: '#e086ce',
        borderColor: '#e086ce',
        data: mounthsActive,
      }],
    },
    options: {},
  });
  const ctxRecovered = document.getElementById('myChartRecovered').getContext('2d');
  if (myChartRecovered !== null) {
    myChartRecovered.destroy();
  }
  myChartRecovered = new Chart(ctxRecovered, {
    type: 'line',
    data: {
      labels: mounthsDate,
      datasets: [{
        label: 'Recovereds',
        backgroundColor: '#86d9e1',
        borderColor: '#86d9e1',
        data: mounthsRecovered,
      }],
    },
    options: {},
  });
};

export default chart;
