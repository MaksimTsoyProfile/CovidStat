import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Container } from 'react-bootstrap';

const WorldStat = () => {
  const worldTotalDeaths = useSelector((state) => state.data.worldTotalDeaths);
  const topTenDeaths = worldTotalDeaths.slice(0, 10);
  return (
    <Container id="world-table">
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Country</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          { topTenDeaths.map((data) => (
            <tr key={data.CountryCode}>
              <td>{data.Country}</td>
              <td>{data.TotalDeaths}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WorldStat;
