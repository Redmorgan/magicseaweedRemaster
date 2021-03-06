/**
 * @fileoverview The top parent of the main screen that contains template appearance that is seen on all of the pages as well as the tab page navigation.
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

// Components
import SW_Header from '../components/SW_Header';
import SW_PageNav from '../components/SW_PageNav';

/**
 * @summary The components building up the main screen of the application, displaying all the beach data.
 * 
 * @param {function}  route - Pass through data from the previous layer of the stack.
 *  
 * @returns The main screen page of the application.
 */
const SW_mainScreen = ({ route }) => {

  return (

    <MainView>
      
      <StatusBar backgroundColor="#219EBC" style="inverted" />

      <SW_Header name = 'main' beachName = {route.params.BeachName}/>

      <MainBody>

        <SW_PageNav id={route.params.beachID} liveCamState={route.params.liveCamState}/>

      </MainBody>

      <Footer></Footer>

    </MainView>

  );
}

const MainView = styled.View`

  width:100%;
  height:100%;
  background-color:#8ECAE6;
  display:flex;
  align-items:center;

`
const Footer = styled.View`

  width:100%;
  height:120px;
  background-color:#FFB703;
  position:absolute;
  bottom:0;

`
const MainBody = styled.View`

  width:95%;
  height:85%;
  background-color:#ffffff;
  position:absolute;
  z-index:1;
  margin-top:100px;
  border-radius:5px;

`

export default SW_mainScreen