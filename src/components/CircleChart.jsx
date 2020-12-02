import React from 'react';
import { useSelector } from 'react-redux';
import { Polar } from 'react-chartjs-2';

const CircleCharts = () => {
  const posts = useSelector((state) => state.data.posts);
  const lastPosts = posts[posts.length - 1];
  return (posts.length > 0 ? (
    <div className="chart">
      <Polar
        data={{
          datasets: [{
            backgroundColor: ['#e086ce', '#8285d6', '#86d9e1'],
            data: [lastPosts.Active, lastPosts.Confirmed, lastPosts.Recovered],
          }],
          labels: [
            'Active',
            'Confirmed',
            'Recovered',
          ],
        }}
        width={200}
        height={200}
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
  ) : (
    null
  ));
};

export default CircleCharts;
