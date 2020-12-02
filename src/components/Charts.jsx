import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const Charts = () => {
  const posts = useSelector((state) => state.data.posts);
  const filterPosts = posts.filter((post) => (post.Date.slice(8, 10) === '01'));
  const mounthsDeaths = filterPosts.map((post) => post.Deaths);
  const mounthsDate = filterPosts.map((post) => post.Date.slice(0, 7));
  return (
    <div className="chart">
      <Line
        data={{
          labels: mounthsDate,
          datasets: [{
            label: 'Deaths',
            backgroundColor: '#8285d6',
            borderColor: '#8285d6',
            data: mounthsDeaths,
          }],
        }}
        width={500}
        height={400}
        options={{
          legend: {
            labels: {
              fontColor: 'white',
              color: 'white',
            },
          },
        }}
      />
    </div>
  );
};

export default Charts;
