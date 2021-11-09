import * as React from 'react';
import styled from 'styled-components/native';

// Components
import ForecastSplit from '../components/SW_forecast3hours'

const ForecastWidget = ({ Header, weatherData }) => {

  return (

    <ForecastContainer>

      <ForecastWrapper>

        <ForecastHeaderContainer>

          <ForecastHeader>{Header}</ForecastHeader>

        </ForecastHeaderContainer>

        <ForecastSideScroll horizontal={true} contentContainerStyle={{paddingRight:5}}>

          <ForecastSplit Time = '03:00' Forecast = {weatherData['3']}></ForecastSplit>
          <ForecastSplit Time = '06:00' Forecast = {weatherData['6']}></ForecastSplit>
          <ForecastSplit Time = '09:00' Forecast = {weatherData['9']}></ForecastSplit>
          <ForecastSplit Time = '12:00' Forecast = {weatherData['12']}></ForecastSplit>
          <ForecastSplit Time = '15:00' Forecast = {weatherData['15']}></ForecastSplit>
          <ForecastSplit Time = '18:00' Forecast = {weatherData['18']}></ForecastSplit>
          <ForecastSplit Time = '21:00' Forecast = {weatherData['21']}></ForecastSplit>
          <ForecastSplit Time = '00:00' Forecast = {weatherData['24']}></ForecastSplit>

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