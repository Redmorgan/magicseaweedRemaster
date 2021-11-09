import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import styled from 'styled-components/native';

// Components
import SW_Header from '../components/SW_Header';
import BeachSelector from '../components/SW_BeachSelector';

// JSON
import beachesJson from '../beaches.json'

const SW_homeScreen = ({ navigation: { navigate } }) => {

const [recentState, updateRecentList] = useState(false)

function changeRecentState(){

  updateRecentList(!recentState)

}

const [favouriteState, updateFavouriteList] = useState(false)

function changeFavouriteState(){

  updateFavouriteList(!favouriteState)

}

  // var beachData = beachesJson

  var beachData = beachesJson

  return (

    <MainView>
      
      <StatusBar backgroundColor="#219EBC" style="inverted" />

      <SW_Header name = 'home'/>

      <MainBody>

        <SectionHeaderContainer>

          <SectionHeader>Recent Searches</SectionHeader>

        </SectionHeaderContainer>

        <RecentBeachFlatList
          data={beachData}
          renderItem={({ item }) => (<BeachSelector beachID = {item['id']} beachName = {item['name']} listType="recent" liveCamBool = {item['LiveCam']} navigate={navigate} updateRecentList={() => changeRecentState()} updateFavouriteList={() => changeFavouriteState()}></BeachSelector>)}
          contentContainerStyle={{paddingBottom:10}}
        />

        <SectionHeaderContainer>

          <SectionHeader>Favourites</SectionHeader>

        </SectionHeaderContainer>

        <FavouriteBeachFlatList
          data={beachData}
          renderItem={({ item }) => (<BeachSelector beachID = {item['id']} beachName = {item['name']} listType="favourite" liveCamBool = {item['LiveCam']} navigate={navigate} updateRecentList={() => changeRecentState()} updateFavouriteList={() => changeFavouriteState()}></BeachSelector>)}
          contentContainerStyle={{paddingBottom:10}}
        />


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

const SectionHeaderContainer = styled.View`

  width:100%
  height:10%
  align-items:center;
  justify-content:center;

`

const SectionHeader = styled.Text`

  font-size:35px


`

const RecentBeachFlatList = styled.FlatList`

  width:100%;
  height:40%;
  padding-top:10px;
  border-bottom-width: 1px;
  border-bottom-color: #D8D8D8; 

`

const FavouriteBeachFlatList = styled.FlatList`

  width:100%;
  height:40%;
  padding-top:10px;

`

export default SW_homeScreen