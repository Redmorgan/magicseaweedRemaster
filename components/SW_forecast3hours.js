/**
 * @fileoverview This component shows the swell height and wind speed at a particular 3 hour interval.
 */

import * as React from 'react';
import styled from 'styled-components/native';

/**
 * @summary The forecast for a 3 hour interval of wind speed and swell height.
 * 
 * @param {string}  time - The time interval.
 * @param {object}  forecast - Contains the wind speed and swell height for the specified time interval.
 *  
 * @returns A formatted component containing the passed through time interval, swell height, and wind speed.
 */
const Forecast3Hour = ({ time, forecast }) => {

  return (

    <Forecast3HourContainer>

        <CurrentTime>{time}</CurrentTime>

        <ForecastData>

            <ForecastDataLeft>

                <SwellHeight>Swell: </SwellHeight>
                <WindSpeed>Wind: </WindSpeed>

            </ForecastDataLeft>

            <ForecastDataRight>

                <SwellHeight style={{fontWeight:'bold'}}>{forecast['swell']}ft</SwellHeight>
                <WindSpeed style={{fontWeight:'bold'}}>{forecast['wind']}mph</WindSpeed>

            </ForecastDataRight>

        </ForecastData>

    </Forecast3HourContainer>

  );
}

const Forecast3HourContainer = styled.View`

    height:100px;
    width:100px;
    margin-top:5px;
    margin-right:5px;
    border-style: solid;
    border-width: 1px;
    border-color: #D8D8D8;
    border-radius:10px;
    background-color:#ffffff;

`
const CurrentTime = styled.Text`

    width:100%;
    height:25%;
    font-size:17px;
    text-align:center;
    font-weight:bold;
    border-bottom-width: 1px;
    border-bottom-color: #D8D8D8;
    background-color: #023047
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    color:#ffffff;

`
const ForecastData = styled.View`

    width:100%;
    height:75%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:15px;

`
const ForecastDataLeft = styled.View`

    width:45%;
    height:50%;

`
const ForecastDataRight = styled.View`

    width:50%;
    height:50%;

`
const SwellHeight = styled.Text`

    width:100%;
    font-size:15px;

`
const WindSpeed = styled.Text`

    width:100%;
    font-size:15px;

`


export default Forecast3Hour