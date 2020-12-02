import Chart from 'chart.js';

let myCircleChart = null;

const circleChart = ({ lastPosts }) => {
  const ctx = document.getElementById('myCircleChart').getContext('2d');
  if (myCircleChart !== null) {
    myCircleChart.destroy();
  }
  myCircleChart = new Chart(ctx, {
    data: {
      datasets: [{
        backgroundColor: ['#e086ce', '#8285d6', '#86d9e1'],
        data: [lastPosts.Active, lastPosts.Confirmed, lastPosts.Recovered],
      }],
      labels: [
        'Active',
        'Confirmed',
        'Recovered',
      ],
    },
    type: 'polarArea',
    options: {
      legend: {
        labels: {
          fontColor: 'white',
          color: 'white',
        },
      },
    },
  });
};

export default circleChart;
