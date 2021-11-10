/**
 * @fileoverview Contains the page navigation component used for navigating between the 'Overview' and the 'Forecast' tab.
 */
import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";

// Components
import OverviewScreen from "./SW_Overview";
import ForecastScreen from "./SW_Forecast";

// Images
import waveImg from "../images/waveIcon.png";
import calendarImg from "../images/calendarIcon.png";

const Tab = createMaterialTopTabNavigator();

/**
 * @summary The bottom nav bar used for navigating between the overview and forecast tabs.
 * 
 * @param {string}  id - The id of the beach.
 * @param {boolean} liveCamState - Shows if the beach has a live cam or not.
 *  
 * @returns A bottom nav bar that has options for overview and forecast.
 */
const SW_PageNav = ({ id, liveCamState }) => {

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarPosition="bottom"
      overflow="hidden"
      tabBarPressColor={"transparent"}
      screenOptions={{
        tabBarPosition: "bottom",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#ffffff",
        tabBarPressColor: "transparent",
        tabBarIndicatorStyle: {
          backgroundColor: "#ffffff",
        },
        tabBarStyle: {
          backgroundColor: "#219EBC",
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        },
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontSize: 25,
        },
      }}
    >
      <Tab.Screen
        name={"Overview"}
        children={() => <OverviewScreen id={id} liveCamState={liveCamState}/>}
        options={{ tabBarIcon: () => <WaveIcon source={waveImg} /> }}
      />
      <Tab.Screen
        name="Forecast"
        children={() => <ForecastScreen id={id}/>}
        options={{ tabBarIcon: () => <CalendarIcon source={calendarImg} /> }}
      />
    </Tab.Navigator>
  );
};

const WaveIcon = styled.Image`

  width:30px;
  height:30px;

`
const CalendarIcon = styled.Image`

  width:30px;
  height:30px;

`

export default SW_PageNav;
