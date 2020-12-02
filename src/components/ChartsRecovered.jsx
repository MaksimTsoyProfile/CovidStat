import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const ChartsRecovered = () => {
  const posts = useSelector((state) => state.data.posts);
  const filterPosts = posts.filter((post) => (post.Date.slice(8, 10) === '01'));
  const mounthsRecovered = filterPosts.map((post) => post.Recovered);
  const mounthsDate = filterPosts.map((post) => post.Date.slice(0, 7));
  return (
    <div className="chart">
      <Line
        data={{
          labels: mounthsDate,
          datasets: [{
            label: 'Recovereds',
            backgroundColor: '#86d9e1',
            borderColor: '#86d9e1',
            data: mounthsRecovered,
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

export default ChartsRecovered;
