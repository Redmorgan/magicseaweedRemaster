/**
 * @fileoverview This component is a customisable pop-up that mainly gets used for helping users to understand onscreen information.
 */
import React from 'react';
import styled from 'styled-components/native';
import { Vibration } from 'react-native';

// Images
import CloseButtonImg from '../images/greyCloseIcon.png'

const SW_Modal = ({onPress, title, state, img}) => {

    /**
     * @summary Used as an onPress to close the modal.
     */
    function closeModal(){

        onPress()
        Vibration.vibrate(5)

    }

  return (

    <ModalContainer
        visible={state}
        animationType='fade'
        transparent={true}>
        
        <ModalWrapper>

            <ModalBody>

                <ModalHeader>

                    <ModalCloseButton underlayColor={'transparent'} onPress={() => {closeModal()}}>

                        <ModalCloseIcon source={CloseButtonImg}/>

                    </ModalCloseButton>

                    <ModalHeaderText>{title}</ModalHeaderText>

                </ModalHeader>

                <ModalInfoBody>

                    <ModalImage source={img}/>

                </ModalInfoBody>

            </ModalBody>

        </ModalWrapper>

    </ModalContainer>

  );
}


// Modal appearance
const ModalContainer = styled.Modal`
`
const ModalWrapper = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color: rgba(181,181,181,0.8);
`
const ModalBody = styled.View`

    width:80%;
    height:60%;
    background-color:#ffffff;
    border-radius:5px;
    display:flex;
    align-items:center;

`
const ModalHeader = styled.View`

    width:100%;
    height:15%;
    display:flex;
    justify-content:center;
    align-items:center;

`
const ModalHeaderText = styled.Text`

    font-size:30px;
    color:#000000;
    width:80%;
    text-align:center;
    margin-top:10px;

`
const ModalCloseButton = styled.TouchableHighlight`

    width:50px;
    height:50px;
    position: absolute;
    top: 5px;
    right: 5px;

`
const ModalCloseIcon = styled.Image`

    width:100%;
    height:100%;

`
const ModalInfoBody = styled.View`

    width:90%;
    height:80%;
    justify-content:center;
    align-items:center;

`
const ModalImage = styled.Image`

    width:80%;
    height:80%;

`

export default SW_Modal