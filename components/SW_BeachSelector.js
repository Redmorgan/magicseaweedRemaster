import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Vibration } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Images
import favouriteImg from '../images/filledStar.png'
import unfavouriteImg from '../images/emptyStar.png'
import cameraImg from '../images/liveCam.png'
import caretImg from '../images/caretRight.png'

const BeachSelector = ({ beachName, navigate, beachID, listType, liveCamBool, updateRecentList, updateFavouriteList }) => {

  const [favouriteState, setFavourite] = useState(false);

  const storeFavourite = async (value) => {
    try {

      await AsyncStorage.setItem(beachID, JSON.stringify(value))

    } catch (e) {

      console.log(`Error whilst saving favourite data for ${beachName}`)

    }
  }

  const getFavourite = async () => {
    try {
      const value = await AsyncStorage.getItem(beachID)

      if(value == "true") {

        setFavourite(true)

      }else{

        setFavourite(false)

      }
    } catch(e) {

      console.log(`Error whilst collecting favourite data for ${beachName}`)

    }
  }

  function updateFavourite(){

    Vibration.vibrate(5)
    setFavourite(!favouriteState)
    storeFavourite(!favouriteState)

  }


  getFavourite()

  if (favouriteState == true && listType == "favourite") {
  
    return (
      
      <BeachSelectorContainer>

        <FavouriteBeachTouchable onPress={() => { updateFavourite(); updateFavouriteList();}}  underlayColor={'transparent'}>

          {(favouriteState)? <FavouriteBeachImage source={favouriteImg}/>:<FavouriteBeachImage source={unfavouriteImg}/>}

        </FavouriteBeachTouchable>

        <SelectBeachTouchable onPress={() => {Vibration.vibrate(5); navigate('Main', {beachID:beachID, BeachName:beachName, liveCamState:liveCamBool})}} underlayColor={'transparent'}>

          <SelectBeachTouchableWrapper>

            <BeachNameHeader>{beachName}</BeachNameHeader>
            
            <BeachSelectorRightAlign>

              {(liveCamBool == "true")? <LiveCam source={cameraImg}/>:null}

              <RightCaret source={caretImg}/>

            </BeachSelectorRightAlign>

          </SelectBeachTouchableWrapper>

        </SelectBeachTouchable>

      </BeachSelectorContainer>

    );

  }else if(listType == "recent") {
    
    return (
      
      <BeachSelectorContainer>

        <FavouriteBeachTouchable onPress={() => { updateFavourite(); updateRecentList();}}  underlayColor={'transparent'}>

          {(favouriteState)? <FavouriteBeachImage source={favouriteImg}/>:<FavouriteBeachImage source={unfavouriteImg}/>}

        </FavouriteBeachTouchable>

        <SelectBeachTouchable onPress={() => {Vibration.vibrate(5); navigate('Main', {beachID:beachID, BeachName:beachName, liveCamState:liveCamBool})}} underlayColor={'transparent'}>

          <SelectBeachTouchableWrapper>

            <BeachNameHeader>{beachName}</BeachNameHeader>
            
            <BeachSelectorRightAlign>

              {(liveCamBool == "true")? <LiveCam source={cameraImg}/>:null}

              <RightCaret source={caretImg}/>

            </BeachSelectorRightAlign>

          </SelectBeachTouchableWrapper>

        </SelectBeachTouchable>

      </BeachSelectorContainer>

    );

  }else{

    return(

      null

    );

  }
}


const BeachSelectorContainer = styled.View`

  width:95%;
  height:60px;
  margin-left:2.5%;
  display:flex;
  flex-direction:row
  align-items:center;
  border-radius:10px;
  background-color:#023047;
  margin-bottom:10px

`
const FavouriteBeachTouchable = styled.TouchableHighlight`

  width:60px;
  height:100%;
  justify-content:center;
  align-items:center;

`
const FavouriteBeachImage = styled.Image`

  width:35px;
  height:35px;

`

const SelectBeachTouchable = styled.TouchableHighlight`

  width:83%
  height:100%
  justify-content:center;

`

const SelectBeachTouchableWrapper = styled.View`

  width:100%
  display:flex;
  flex-direction:row

`

const BeachNameHeader = styled.Text`

  color:#ffffff;
  font-size:20px;
  font-weight:bold;

`

const BeachSelectorRightAlign = styled.View`

  position:absolute;
  right:0
  display:flex;
  flex-direction:row;
  align-items:center;
  height:100%

`

const LiveCam = styled.Image`

  width:20px
  height:20px
  margin-right:10px

`

const RightCaret = styled.Image`

  width:35px;
  height:35px;

`

export default BeachSelector