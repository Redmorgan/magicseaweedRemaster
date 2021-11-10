/**
 * @fileoverview This component displays the 8 3-hour interval widgets in a horizontal scrollview, within the compoenent you can
 * see the swell height and the wind speed for a 24 period on a specified day.
 */
import * as React from 'react';
import styled from 'styled-components/native';

// Components
import ForecastSplit from '../components/SW_forecast3hours'

const ForecastWidget = ({ header, weatherData }) => {

  return (

    <ForecastContainer>

      <ForecastWrapper>

        <ForecastHeaderContainer>

          <ForecastHeader>{header}</ForecastHeader>

        </ForecastHeaderContainer>

        <ForecastSideScroll horizontal={true} contentContainerStyle={{paddingRight:5}}>

          <ForecastSplit time = '03:00' forecast = {weatherData['3']}></ForecastSplit>
          <ForecastSplit time = '06:00' forecast = {weatherData['6']}></ForecastSplit>
          <ForecastSplit time = '09:00' forecast = {weatherData['9']}></ForecastSplit>
          <ForecastSplit time = '12:00' forecast = {weatherData['12']}></ForecastSplit>
          <ForecastSplit time = '15:00' forecast = {weatherData['15']}></ForecastSplit>
          <ForecastSplit time = '18:00' forecast = {weatherData['18']}></ForecastSplit>
          <ForecastSplit time = '21:00' forecast = {weatherData['21']}></ForecastSplit>
          <ForecastSplit time = '00:00' forecast = {weatherData['24']}></ForecastSplit>

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