import * as React from 'react';
import styled from 'styled-components/native';

// Components
import ForecastWidget from './SW_ForecastWidget';

// JSON
import beachesJson from '../beaches.json'

const ForecastScreen = (props) => {

  var beachData = beachesJson.filter(b => b.id === props.id)

  beachData = beachData[0]

  return (

    <OverviewScroll>

      <ForecastWidget Header='Mon' weatherData={beachData['days']['monday']}></ForecastWidget>
      <ForecastWidget Header='Tue' weatherData={beachData['days']['tuesday']}></ForecastWidget>
      <ForecastWidget Header='Wed' weatherData={beachData['days']['wednesday']}></ForecastWidget>
      <ForecastWidget Header='Thu' weatherData={beachData['days']['thursday']}></ForecastWidget>
      <ForecastWidget Header='Fri' weatherData={beachData['days']['friday']}></ForecastWidget>
      <ForecastWidget Header='Sat' weatherData={beachData['days']['saturday']}></ForecastWidget>
      <ForecastWidget Header='Sun' weatherData={beachData['days']['sunday']}></ForecastWidget>

    </OverviewScroll>
    
  );
}

const OverviewScroll = styled.ScrollView`

  width:100%;
  background-color:#ffffff;
  padding-top:10px;

`



export default ForecastScreen