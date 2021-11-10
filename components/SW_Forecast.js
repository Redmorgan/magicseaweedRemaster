/**
 * @fileoverview This component is the top component for the 'Forecast' tab, it contains a scroll view which contains 7 ForecastWidgets,
 * one for each day of the week.
 */
import * as React from 'react';
import styled from 'styled-components/native';

// Components
import ForecastWidget from './SW_ForecastWidget';

// JSON
import beachesJson from '../beaches.json'

const ForecastScreen = ({ id }) => {

  // Filters the beach data based on the ID passed from the homescreen based on the beach the user selected
  var beachData = beachesJson.filter(b => b.id === id)
  beachData = beachData[0]

  return (

    <OverviewScroll contentContainerStyle={{paddingBottom:10}}>

      <ForecastWidget header='Mon' weatherData={beachData['days']['monday']}></ForecastWidget>
      <ForecastWidget header='Tue' weatherData={beachData['days']['tuesday']}></ForecastWidget>
      <ForecastWidget header='Wed' weatherData={beachData['days']['wednesday']}></ForecastWidget>
      <ForecastWidget header='Thu' weatherData={beachData['days']['thursday']}></ForecastWidget>
      <ForecastWidget header='Fri' weatherData={beachData['days']['friday']}></ForecastWidget>
      <ForecastWidget header='Sat' weatherData={beachData['days']['saturday']}></ForecastWidget>
      <ForecastWidget header='Sun' weatherData={beachData['days']['sunday']}></ForecastWidget>

    </OverviewScroll>
    
  );
}

const OverviewScroll = styled.ScrollView`

  width:100%;
  background-color:#ffffff;
  padding-top:10px;

`

export default ForecastScreen