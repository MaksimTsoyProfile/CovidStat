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
        backgroundColor: '#292b2c',
        borderColor: '#292b2c',
        data: mounthsDeath,
      }],
    },
    options: {},
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
        backgroundColor: '#d9534f',
        borderColor: '#d9534f',
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
        backgroundColor: '#5cb85c',
        borderColor: '#5cb85c',
        data: mounthsRecovered,
      }],
    },
    options: {},
  });
};

export default chart;
