import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { Input, Button } from 'antd';

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

const MapComponent = (data) => {
  const { latitude, setLatitude, longitude, setLongitude, isEdit, isMap, setIsMap, type } = data;
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    zoom: 8
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {

      setLatitude(newViewport.latitude);
      setLongitude(newViewport.longitude);
      return handleViewportChange({
        ...newViewport,
        
      });
    },
    [handleViewportChange]
  );

  function changeLatitude(value) {
    if (+value >= -90 && +value <= 90) {
      const valueLatitude = Number(value);
      setViewport({...viewport, latitude: valueLatitude})
      setLongitude(valueLatitude);
    }
  }

  function changeLongitude(event) {
    const value = Number(event.target.value);
    setViewport({...viewport, longitude: value})
    setLatitude(value);
  }

  function deleteMap() {
    setLatitude(0);
    setLongitude(0);
    setIsMap(false)
  }

  function checkValue(event) {
    if ("1234567890.".indexOf(event.key) === -1) {
      event.preventDefault();
    }
  }

  return (
    <div>
      { isMap &&
        <div style={{ height: "50vh" }}>
          {
            isEdit && 
            <div>
              <span className="hint">Введите координаты в поля ниже чтобы отметить место встречи на карте</span> 
              <Input 
                onKeyPress={(event) => checkValue(event)}
                placeholder="поле для широты"
                onChange={(event) => changeLatitude(event.target.value)}
              />
              <Input 
                onKeyPress={(event) => checkValue(event)}
                placeholder="поле для долготы"
                onChange={(event) => changeLongitude(event)}
              />
              <p className="hint">Или вы можете ввести адрес в поле ниже чтобы отметить место встречи на карте</p>
            </div>
          }
          <MapGL
            ref={mapRef}
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            zoom={viewport.zoom}
            width="100%"
            height={isEdit && "40%" || "90%"}
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            { 
              isEdit &&
              <Geocoder
                mapRef={mapRef}
                onViewportChange={handleGeocoderViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                position="top-left"
                placeholder="поле для адреса"
              />
            }
          </MapGL>
          <p>широта: {latitude.toFixed(3)}; долгота: {longitude.toFixed(3)} </p>
          { isEdit && <Button onClick={() => deleteMap()}>Убрать карту</Button> }
        </div>
        || isEdit && type === "offline" &&
          <Button onClick={() => setIsMap(true)}>Добавить карту</Button>
      }
    </div>
  );
};



export default MapComponent;
