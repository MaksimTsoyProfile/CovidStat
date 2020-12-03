import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Circle, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import numeral from 'numeral';

const WorldMap = () => {
  const mapDatas = useSelector((state) => state.data.mapDatas);
  console.log(mapDatas);
  return (mapDatas.length > 0 ? (
    <div className="world-map">
      <LeafletMap center={{ lat: 12, lng: 12 }} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          mapDatas.map((country) => (
            <Circle
              key={country.country}
              center={[country.countryInfo.lat, country.countryInfo.long]}
              color={'#CC1034'}
              fillColor={'#CC1034'}
              fillOpacity={0.4}
              radius={Math.sqrt(country.cases) * 400}
            >
              <Popup>
                <div className="info-container">
                  <div
                    className="info-flag"
                    style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                  ></div>
                  <div>{country.country}</div>
                  <div>
                    Cases: {numeral(country.cases).format('0,0')}
                  </div>
                  <div>
                    Recovered: {numeral(country.recovered).format('0,0')}
                  </div>
                  <div>
                    Deaths: {numeral(country.deaths).format('0,0')}
                  </div>
                </div>
              </Popup>
            </Circle>
          ))}
      </LeafletMap>
    </div>
  ) : (
    null
  ));
};

export default WorldMap;
