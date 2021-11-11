/**
 * @fileoverview This component displays the 8 3-hour interval widgets in a horizontal scrollview, within the compoenent you can
 * see the swell height and the wind speed for a 24 period on a specified day.
 */

import * as React from 'react';
import styled from 'styled-components/native';

// Components
import ForecastSplit from '../components/SW_forecast3hours'

/**
 * @summary A component for displaying the forecast data for 24 hour.
 * 
 * @param {string}  header - The day of the week the data is for.
 * @param {object}  forecastData - The forecast data for the specified 24 hour period.
 *  
 * @returns A horizontal scroll view containing 7 elements.
 */
const ForecastWidget = ({ header, forecastData }) => {

  return (

    <ForecastContainer>

      <ForecastWrapper>

        <ForecastHeaderContainer>

          <ForecastHeader>{header}</ForecastHeader>

        </ForecastHeaderContainer>

        <ForecastSideScroll horizontal={true} contentContainerStyle={{paddingRight:5}}>

          <ForecastSplit time = '03:00' forecast = {forecastData['3']}/>
          <ForecastSplit time = '06:00' forecast = {forecastData['6']}/>
          <ForecastSplit time = '09:00' forecast = {forecastData['9']}/>
          <ForecastSplit time = '12:00' forecast = {forecastData['12']}/>
          <ForecastSplit time = '15:00' forecast = {forecastData['15']}/>
          <ForecastSplit time = '18:00' forecast = {forecastData['18']}/>
          <ForecastSplit time = '21:00' forecast = {forecastData['21']}/>
          <ForecastSplit time = '00:00' forecast = {forecastData['24']}/>

        </ForecastSideScroll>

      </ForecastWrapper>

    </ForecastContainer>

  );
}

const ForecastContainer = styled.View`

  width:100%;
  height:120px;
  justify-content:center;
  align-items:center;
  padding-bottom:10px;

`
const ForecastWrapper = styled.View`

  width:95%;
  height:100%;
  border-radius:10px;
  border-style: solid;
  border-width: 1px;
  border-color: #D8D8D8;
  display:flex;
  flex-direction:row;

`
const ForecastHeaderContainer = styled.View`

  height:100%;
  width:20%;
  justify-content:center;
  align-items:center;
  border-right-width: 1px;
  border-right-color: #D8D8D8;
  background-color:#023047;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px ;

`
const ForecastHeader = styled.Text`

  font-size:30px;
  color:#ffffff;
  
`
const ForecastSideScroll = styled.ScrollView`

  width:80%;
  height:100%;
  padding-left:5px;
  background-color:#219EBC;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;

`

export default ForecastWidget