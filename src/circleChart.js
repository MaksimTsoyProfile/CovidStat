import Chart from 'chart.js';

let myCircleChart = null;

const circleChart = () => {
  const ctx = document.getElementById('myCircleChart').getContext('2d');
  if (myCircleChart !== null) {
    myCircleChart.destroy();
  }
  myCircleChart = new Chart(ctx, {
    data: {
      datasets: [{
        backgroundColor: ['#e086ce', '#8285d6', '#86d9e1'],
        data: [10, 20, 30],
      }],
      labels: [
        'Red',
        'Yellow',
        'Blue',
      ],
    },
    type: 'polarArea',
    options: {},
  });
};

export default circleChart;
