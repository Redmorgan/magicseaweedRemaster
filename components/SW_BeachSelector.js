/**
 * @fileoverview This component is the item that appears in the flat lists on the home screen that a user can press to open a beach or to
 * add/remove a beach from their favourites.
 */

import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Vibration } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Images
import favouriteImg from '../images/filledStar.png'
import unfavouriteImg from '../images/emptyStar.png'
import cameraImg from '../images/liveCam.png'
import caretImg from '../images/caretRight.png'

/**
 * @summary The onscreen component for the beach selector, used in flat lists within 'SW_homeScreen.js'
 * 
 * @param {string}    beachName - The name of the beach.
 * @param {function}  navigate - Passed through navigation function for navigation between stacks.
 * @param {string}    beachID - The ID of the beach.
 * @param {string}    listType - Differentiates the flat-list the beach selector is being added into.
 * @param {boolean}   liveCamBool - Boolean showing if there is a live cam or not.
 * @param {function}  updateRecentList - Passed through useState function used for updating the 'RecentBeachFlatList' flat-list on 'SW_homeScreen.js'.
 * @param {function}  updateFavouriteList - Passed through useState function used for updating the 'FavouriteBeachFlatList' flat-list on 'SW_homeScreen.js'.
 *  
 * @returns The formatted beach selector component
 */
const BeachSelector = ({ beachName, navigate, beachID, listType, liveCamBool, updateRecentList, updateFavouriteList }) => {

  /** @const {bool} favouriteState holds the favourite state of the beach based on the stored async data. */
  const [favouriteState, setFavourite] = useState(false);

  /**
   * @summary Uses Aysnc storage to save the favourite state of a beach against its ID.
   * 
   * @description Takes a boolean value and saves it against the ID of the beach that was passed through the props when the component was initialised.
   *  
   * @param {boolean} value - The new favourite saved of the beach to be saved/updated. 
   */
  const storeFavourite = async (value) => {
    try {

      await AsyncStorage.setItem(beachID, JSON.stringify(value))

    } catch (e) {

      console.log(`Error whilst saving favourite data for ${beachName}`)

    }
  }

  /**
   * @summary Pulls the data stored against the keyvalue pair of the beachID and sets the favourite state based of it.
   * 
   * @description getFavourite takes the beachID prop that passed into the component and uses it to find out if there is anything saved against it,
   * if the value saved against it is true then the favourite state gets set to TRUE, for anything else however (returns FALSE or NULL) the favourite
   * state is set to false.
   */
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

  /**
   * @summary an onPress function that updates the favourite state of a beach.
   */
  function updateFavourite(){

    Vibration.vibrate(5)
    setFavourite(!favouriteState)
    storeFavourite(!favouriteState)

  }
  
  /**
   * @summary an onPress function that opens the selected beach.
   */
  function openBeach(){

    Vibration.vibrate(5);
    navigate('Main', {beachID:beachID, BeachName:beachName, liveCamState:liveCamBool})

  }

  getFavourite()

  if (favouriteState == true && listType == "favourite") {
  
    return (
      
      <BeachSelectorContainer>

        <FavouriteBeachTouchable onPress={() => { updateFavourite(); updateFavouriteList();}}  underlayColor={'transparent'}>

          {(favouriteState)? <FavouriteBeachImage source={favouriteImg}/>:<FavouriteBeachImage source={unfavouriteImg}/>}

        </FavouriteBeachTouchable>

        <SelectBeachTouchable onPress={() => {openBeach();}} underlayColor={'transparent'}>

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

        <SelectBeachTouchable onPress={() => {openBeach();}} underlayColor={'transparent'}>

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
  margin-bottom:10px;

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

  width:83%;
  height:100%;
  justify-content:center;

`
const SelectBeachTouchableWrapper = styled.View`

  width:100%;
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
  right:0;
  display:flex;
  flex-direction:row;
  align-items:center;
  height:100%;

`
const LiveCam = styled.Image`

  width:20px;
  height:20px;
  margin-right:10px;

`
const RightCaret = styled.Image`

  width:35px;
  height:35px;

`

export default BeachSelector