import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const ChartsActive = () => {
  const posts = useSelector((state) => state.data.posts);
  const filterPosts = posts.filter((post) => (post.Date.slice(8, 10) === '01'));
  const mounthsActive = filterPosts.map((post) => post.Active);
  const mounthsDate = filterPosts.map((post) => post.Date.slice(0, 7));
  return (
    <div className="chart">
      <Line
        data={{
          labels: mounthsDate,
          datasets: [{
            label: 'Actives',
            backgroundColor: '#e086ce',
            borderColor: '#e086ce',
            data: mounthsActive,
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

export default ChartsActive;
