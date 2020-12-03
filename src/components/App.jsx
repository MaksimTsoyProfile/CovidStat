import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import MapCovid from './MapCovid';
import MainComponent from './MainComponent';
import 'leaflet/dist/leaflet.css';

const App = () => (
  <Router>
    <Container>
      <Nav />
        <Switch>
          <Route path='/' exact component={MainComponent}/>
          <Route path='/map' component={MapCovid}/>
        </Switch>
    </Container>
  </Router>
);

export default App;
