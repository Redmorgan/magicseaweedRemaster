import React from 'react';
import { Vibration } from 'react-native';
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native';

// Images
import searchIcon from '../images/search.png'
import msw_logo from '../images/msw_logo.png'
import settingsCog from '../images/settingsCog.png'
import backArrow from '../images/backArrow.png'

const SW_Header = ({ name, beachName }) => {

  const navigation = useNavigation();

  function returnHome() {

    Vibration.vibrate(10)
    navigation.goBack()

  }

  return (

    <Header>

        {(name == 'main') ? <BackArrow onPress={() => {returnHome();}} underlayColor={'transparent'}><BackArrowImg source = {backArrow}/></BackArrow>:<SW_logo source={msw_logo}/>}

        {(name != 'main')?
        <HeaderSearchContainer>

            <HeaderSearch placeholder="Bournemouth Beach" onPress={() => setShowDropdown(true)}/>

            <SearchIconTouch onPress={() => Vibration.vibrate(10)} underlayColor={'transparent'}>

              <HeaderSearchIcon source={searchIcon}/>

            </SearchIconTouch>

        </HeaderSearchContainer>:
        
        <HeaderLabel>{beachName}</HeaderLabel>}

        {/* Feature removed due to lack of time */}
        {/* {(name != 'main')?
        <SW_settings onPress={() => Vibration.vibrate(10)} underlayColor={'transparent'}>

          <SW_settings_img source={settingsCog}/>

        </SW_settings>:null} */}

    </Header>

  );
}

const Header = styled.View`

  width:100%
  height:80px
  background-color:#219EBC
  position:absolute;
  top:0;
  display:flex;
  align-items:center;
  justify-content:center
  flex-direction:row;
  z-index:2;
`

const SW_logo = styled.Image`

  height:20px;
  width:60px;
  margin-top:20px;
  position:absolute;
  left:10px;
  top:20px;

`

const BackArrow = styled.TouchableOpacity`

  height:30px;
  width:30px;
  position:absolute;
  left:20px;
  top:35px;


`

const BackArrowImg = styled.Image`

  width:100%
  height:100%

`

const HeaderSearchContainer = styled.View`

  width:60%;
  height:40px;
  border-style: solid;
  border-width: 1px;
  border-color: #023047;
  background-color:#FFFFFF;
  border-radius:5px;
  margin-top:20px;
  display:flex;
  flex-direction:row;

`

const SearchIconTouch = styled.TouchableHighlight`

  height:30px;
  width:30px;
  margin-top:5px;
  margin-left:5px;

`
const HeaderSearchIcon = styled.Image`

  height:100%;
  width:100%;

`

const HeaderSearch = styled.TextInput`

  width:85%;
  height:40px;
  padding-left:5px;

`

const SW_settings = styled.TouchableHighlight`

  height:30px
  width:30px
  
  position:absolute;
  right:20px;
  top:35px

`

const SW_settings_img = styled.Image`

  height:100%
  width:100%

`

const HeaderLabel = styled.Text`

  color:#ffffff
  margin-top:20px
  font-size:27px

`

export default SW_Header
