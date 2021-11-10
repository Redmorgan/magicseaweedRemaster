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

/**
 * @summary The onscreen component for the beach selector, used in flat lists within 'SW_homeScreen.js'.
 * 
 * @param {string} beachName - The ID of the beach.
 *  
 * @returns a 7-day 24-hour swell height and wind speed forecast.
 */
const ForecastScreen = ({ id }) => {

  // Filters the beach data based on the ID passed from the homescreen based on the beach the user selected
  var beachData = beachesJson.filter(b => b.id === id)
  beachData = beachData[0]

  return (

    <OverviewScroll contentContainerStyle={{paddingBottom:10}}>

      <ForecastWidget header='Mon' forecastData={beachData['days']['monday']}/>
      <ForecastWidget header='Tue' forecastData={beachData['days']['tuesday']}/>
      <ForecastWidget header='Wed' forecastData={beachData['days']['wednesday']}/>
      <ForecastWidget header='Thu' forecastData={beachData['days']['thursday']}/>
      <ForecastWidget header='Fri' forecastData={beachData['days']['friday']}/>
      <ForecastWidget header='Sat' forecastData={beachData['days']['saturday']}/>
      <ForecastWidget header='Sun' forecastData={beachData['days']['sunday']}/>

    </OverviewScroll>
    
  );
}

const OverviewScroll = styled.ScrollView`

  width:100%;
  background-color:#ffffff;
  padding-top:10px;

`

export default ForecastScreen