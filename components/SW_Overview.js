import React, {useState} from 'react';
import { Text, Vibration, Modal, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { LineChart } from 'react-native-chart-kit';

// Components
import SW_Modal from './SW_Modal';

// Images
import HelpButtonImg from '../images/infoIcon.png'
import downArrow from '../images/downArrow.png'
import beachPhoto from '../images/beachPhoto.jpg'
import playButton from '../images/playButton.png'
import sun from '../images/sunIcon.png'
import moon from '../images/moonIcon.png'

import beachesJson from '../beaches.json'

const OverviewScreen = ({id, liveCamState}) => {

    const [swellHelpOpen, setSwellModal] = useState(false);

    const [windHelpOpen, setWindModal] = useState(false);

    // Filters the beach data based on the ID passed from the homescreen based on the beach the user selected
    var beachData = beachesJson.filter(b => b.id === id)

    beachData = beachData[0]

    // The chart only accept integer widths, so this is a work around to get the width of the parent as a integer.
    const [chartParentWidth, setChartParentWidth] = useState(0);

  return (
    <OverviewScroll onLayout={({ nativeEvent }) => setChartParentWidth(nativeEvent.layout.width)}>

        {(liveCamState == "true")? <LiveCamContainer>

            <LiveCam source={beachPhoto}/>

            <GradientLayer>

                <PlayButton source={playButton}/>

                <LiveBoxContainer>

                    <LiveBoxText>LIVE</LiveBoxText>

                </LiveBoxContainer>

            </GradientLayer>

        </LiveCamContainer>:null}

        <QuickOverviewContainer>
            
            {/* Swell data popup */}
            <SW_Modal title='Swell Data Help' onPress={() => setSwellModal(false)} state = {swellHelpOpen}/>

            <QuickOverviewSwellInfo>

                <QuickOverviewSwellHeight>

                    <HelpButton underlayColor={'transparent'} onPress={() => {Vibration.vibrate(5); setSwellModal(true);}}>

                        <HelpIcon source={HelpButtonImg}/>

                    </HelpButton>

                    <SwellHeightLabel>{beachData['swell']['swellHeight']}{beachData['swell']['swellUnit']}</SwellHeightLabel>

                </QuickOverviewSwellHeight>

                <QuickOverviewSwellData>

                    <SwellDirectionImage source={downArrow} style={{transform: [{ rotate: `${beachData['swell']['swellDirection']}deg`}] }}/>

                    <SwellInfoLabel>{beachData['swell']['compassDirection']}</SwellInfoLabel>

                    <SwellInfoLabel>{beachData['swell']['waveSpeed']}</SwellInfoLabel>

                </QuickOverviewSwellData>

            </QuickOverviewSwellInfo>

            {/* Wind data popup */}
            <SW_Modal title='Wind Data Help' onPress={() => setWindModal(false)} state = {windHelpOpen}/>

            <QuickOverviewWindInfo>

                <QuickOverviewWindSpeed>
                    
                    <HelpButton underlayColor={'transparent'} onPress={() => {Vibration.vibrate(5); setWindModal(true);}}>

                        <HelpIcon source={HelpButtonImg}/>

                    </HelpButton>

                    <QuickOverviewWindSpeedLabel>{beachData['wind']['windSpeed']}{beachData['wind']['windUnit']}</QuickOverviewWindSpeedLabel>

                    <QuickOverviewWindSpeedLocation style={(beachData['wind']['windPosition'] == "Onshore")? {backgroundColor:'#FF0000'}:{backgroundColor:'#00FF00'}}>

                        <WindSpeedLocationLabel>{beachData['wind']['windPosition']}</WindSpeedLocationLabel>

                    </QuickOverviewWindSpeedLocation>

                </QuickOverviewWindSpeed>

                <QuickOverviewWindDirection>

                    <QuickOverviewWindDirectionImage source={downArrow} style={{transform: [{ rotate: `${beachData['wind']['windDirection']}deg`}] }}/>

                    <QuickOverviewWindDirectionData>

                        <QuickOverViewWindDirectionLabel>{beachData['wind']['compassDirection']}</QuickOverViewWindDirectionLabel>

                        <QuickOverviewWindDegreesLabel> (180°)</QuickOverviewWindDegreesLabel>
                        
                    </QuickOverviewWindDirectionData>

                </QuickOverviewWindDirection>

            </QuickOverviewWindInfo>

        </QuickOverviewContainer>
        
        <LocalAreaDataContainer>

            <LocalAreaTemp>

                <AirTemp>

                    <Text>

                        <Text>Air: </Text>
                        
                        <Text style={{fontWeight:'bold'}}>{beachData['airTemp']}°C</Text>

                    </Text>

                </AirTemp>

                <SeaTemp>

                    <Text>

                        <Text>Sea: </Text>
                        
                        <Text style={{fontWeight:'bold'}}>{beachData['seaTemp']}°C</Text>

                    </Text>

                </SeaTemp>

            </LocalAreaTemp>

            <LocalAreaTime>

                <Text>

                    <Text>Local Time: </Text>

                    <Text style={{fontWeight:'bold'}}>{beachData['localTime']}</Text>

                    <Text style={{fontSize:10}}> BST</Text>

                </Text>

            </LocalAreaTime>

        </LocalAreaDataContainer>

        <ProMemberContainer>

            <ProMemberLabel>Want to remove all ads?</ProMemberLabel>

            <GetPro>

                <GetProLabel>GET PRO</GetProLabel>

            </GetPro>

        </ProMemberContainer>

        <LightLevelsContainer style={(beachData['light']['current'] == "light")? {backgroundColor:'#ffffff'}:{backgroundColor:'#000000'}}>

            {(beachData['light']['current'] == "light")?<CurrentLightImage source={sun}/>:<CurrentLightImage source={moon}/>}

            <LightTimes>

                <LightTimesLeft>

                    <LightTimesData>

                        <FirstLight style={(beachData['light']['current'] == "light")? {color:'#000000'}:{color:'#ffffff'}}>First light: </FirstLight>

                        <Sunrise style={(beachData['light']['current'] == "light")? {color:'#000000'}:{color:'#ffffff'}}>Sunrise: </Sunrise>

                    </LightTimesData>

                    <LightTimesData>

                        <FirstLight style={(beachData['light']['current'] == "light")? {color:'#000000', fontWeight:'bold'}:{color:'#ffffff', fontWeight:'bold'}}>{beachData['light']['firstLight']}</FirstLight>

                        <Sunrise style={(beachData['light']['current'] == "light")? {color:'#000000', fontWeight:'bold'}:{color:'#ffffff', fontWeight:'bold'}}>{beachData['light']['sunrise']}</Sunrise>

                    </LightTimesData>

                </LightTimesLeft>

                <LightTimesRight>

                    <LightTimesData>

                        <Sunset style={(beachData['light']['current'] == "light")? {color:'#000000'}:{color:'#ffffff'}}>Sunset: </Sunset>

                        <LastLight style={(beachData['light']['current'] == "light")? {color:'#000000'}:{color:'#ffffff'}}>Last light: </LastLight>

                    </LightTimesData>

                    <LightTimesData>

                        <Sunset style={(beachData['light']['current'] == "light")? {color:'#000000', fontWeight:'bold'}:{color:'#ffffff', fontWeight:'bold'}}>{beachData['light']['sunset']}</Sunset>

                        <LastLight style={(beachData['light']['current'] == "light")? {color:'#000000', fontWeight:'bold'}:{color:'#ffffff', fontWeight:'bold'}}>{beachData['light']['lastLight']}</LastLight>

                    </LightTimesData>

                </LightTimesRight>

            </LightTimes>

        </LightLevelsContainer>

        <BeachActivity>

        <BeachActivityTitle>Popular times:</BeachActivityTitle>

            <BeachActivityData>

                <BeachActivityLive style={{fontSize:15}}>

                    
                    <Text style={{color:'#FF0000'}}>Live: </Text>

                    <Text style={{fontWeight:'bold'}}>Very Busy</Text>

                </BeachActivityLive>

                <BeachActivityPopular style={{fontSize:15}}>

                    <Text>Busiest: </Text>

                    <Text style={{fontWeight:'bold'}}>10:30</Text>

                </BeachActivityPopular>

                <BeachActivityQuiet style={{fontSize:15}}>

                    <Text>Quietest: </Text>

                    <Text style={{fontWeight:'bold'}}>21:30</Text>

                </BeachActivityQuiet>

            </BeachActivityData>

        </BeachActivity>

        {/* <LineChart
            data={TidalData}
            width={'100%'}
            height={100}
            verticalLabelRotation={30}
            bezier
        /> */}
        
        <TidalGraphHeader>Tidal Data</TidalGraphHeader>

        <LineChart
            data={{
                labels: ["03:00","06:00","09:00","12:00","15:00","18:00","21:00","24:00"],
                datasets: [
                  {
                    data: [
                        beachData['tide'][0],
                        beachData['tide'][1],
                        beachData['tide'][2],
                        beachData['tide'][3],
                        beachData['tide'][4],
                        beachData['tide'][5],
                        beachData['tide'][6],
                        beachData['tide'][7]
                    ]
                  }
                ]
              }}
            width={chartParentWidth} // from react-native
            height={220}
            yAxisSuffix="m"
            fromZero="false"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2,
            color: (opacity = 1) => "#219EBC",
            labelColor: (opacity = 1) => "#000000",
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#023047"
            }
            }}
            bezier
            style={{
            marginVertical: 10,
            }}
        />

    </OverviewScroll>
  );
}

const OverviewScroll = styled.ScrollView`

    width:100%;
    background-color:#ffffff;

`

// Quick Overview Styling
const QuickOverviewContainer = styled.View`

    width:100%;
    height:200px;
    display:flex;
    flex-direction:row;
    border-bottom-width: 1px;
    border-bottom-color: #D8D8D8; 

`

    // Swell Info appearances
        const QuickOverviewSwellInfo = styled.View`

            width:50%;
            height:200px;
            border-right-width: 1px;
            border-right-color: #D8D8D8; 

        `
        const QuickOverviewSwellHeight = styled.View`

            width:100%;
            height:100px;
            justify-content:center;
            align-items:center;
            
        `
        const HelpButton = styled.TouchableHighlight`

            width:30px;
            height:30px;
            position: absolute;
            top: 5px;
            right: 5px;

        `
        const HelpIcon = styled.Image`

            width:100%;
            height:100%;

        `
        const SwellHeightLabel = styled.Text`

            color:#000000;
            font-size:30px;

        `
        const QuickOverviewSwellData = styled.View`

            width:100%;
            height:100px;
            justify-content:center;
            align-items:center;

        `
        const SwellDirectionImage = styled.Image`

            width:30px;
            height:30px;

        `
        const SwellInfoLabel = styled.Text`

            color:#000000;
            font-size:15px;
            margin-top:5px;

        `
    // Wind info appearances
        const QuickOverviewWindInfo = styled.View`

            width:50%;
            height:200px;

        `
        const QuickOverviewWindSpeed = styled.View`

            width:100%;
            height:100px;
            justify-content:center;
            align-items:center;

        `
        const QuickOverviewWindDirection = styled.View`

            width:100%;
            height:100px;
            justify-content:center;
            align-items:center;

        `
        const QuickOverviewWindDirectionData = styled.View`

            width:100%;
            display:flex;
            flex-direction:row;
            justify-content:center;

        `
        const QuickOverviewWindSpeedLabel = styled.Text`

            color:#000000;
            font-size:30px;

        `

        const QuickOverviewWindSpeedLocation = styled.View`

            width:90px;
            height:30px;
            border-radius:20px;
            margin-top:10px;
            justify-content:center;
            align-items:center;

        `

        const WindSpeedLocationLabel = styled.Text`

            color:#ffffff;
            font-size:16px;
            font-weight: bold;

        `
        const QuickOverviewWindDegreesLabel = styled.Text`

            color:#000000;
            font-size:13px;
            margin-top:11px

        `

        const QuickOverviewWindDirectionImage = styled.Image`

            width:30px;
            height:30px;

        `

        const QuickOverViewWindDirectionLabel = styled.Text`

            color:#000000;
            font-size:15px;
            font-weight: bold;
            margin-top:10px;

        `

// Local Area Styling
    const LocalAreaDataContainer = styled.View`

        width:100%;
        height:30px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;

    `

    const LocalAreaTemp = styled.View`

        height:100%;
        width:50%;
        display:flex;
        flex-direction:row;

    `

    const AirTemp = styled.View`

        height:100%;
        width:50%;
        justify-content:center;
        align-items:center;

    `

    const SeaTemp = styled.View`

        height:100%;
        width:50%;
        justify-content:center;
        align-items:center;

    `

    const LocalAreaTime = styled.View`

        height:100%;
        width:50%;
        justify-content:center;
        align-items:center;

`

// Pro Member Styling
    const ProMemberContainer = styled.View`

        width:100%;
        height:35px;
        background-color:#404040;
        justify-content:center;
        align-items:center;

    `

    const ProMemberLabel = styled.Text`

        color:white;
        font-size:13px;

    `

    const GetPro = styled.View`

        position: absolute;
        top: 5px;
        right: 5px;
        height:25px;
        width:70px;
        background-color:#FFB703;
        border-radius:2px;
        justify-content:center;
        align-items:center;

    `

    const GetProLabel = styled.Text`

        color:#404040;
        font-size:12px;
        font-weight: bold;

    `

// Beach Activity Stling
    const BeachActivity = styled.View`

        width:100%;
        height:80px;
        border-bottom-width: 1px;
        border-bottom-color: #D8D8D8; 

    `
    const BeachActivityTitle = styled.Text`

        color:#000000;
        font-size:18px;
        margin-left:10px;
        margin-top:10px;

    `
    const BeachActivityData = styled.View`

        width:100%;
        height:40px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;

    `
    const BeachActivityLive = styled.Text`
    `
    const BeachActivityPopular = styled.Text`
    `
    const BeachActivityQuiet = styled.Text`
    `

// Live Cam Styling
    const LiveCamContainer = styled.View`

        width:100%;
        height:200px;

    `
    const LiveCam = styled.Image`

        width:100%;
        height:100%;

    `
    const GradientLayer = styled.View`

        width:100%;
        height:100%;
        background-color: rgba(181,181,181,0.6);
        position:absolute;
        z-index:1;
        justify-content:center;
        align-items:center;


    `
    const PlayButton = styled.Image`

        width:50px;
        height:50px;

    `

    const LiveBoxContainer = styled.View`
    
        width:40px;
        height:20px;
        background-color:#FF0000;
        border-radius:5px
        position:absolute;
        top:5px
        left:5px
        justify-content:center;
        align-items:center;
    
    `

    const LiveBoxText = styled.Text`

        color:#ffffff;
        font-size:14px
        font-weight:bold;

    `

// Light Levels Styling
    const LightLevelsContainer = styled.View`

        width:100%;
        height:150px;
        display:flex;
        align-items:center;
        border-bottom-width: 1px;
        border-bottom-color: #D8D8D8;

    `
    const CurrentLightImage = styled.Image`

        width:60px;
        height:60px;
        margin-top:10px;

    `
    const LightTimes = styled.View`

        width:100%;
        height:90px;
        position:absolute;
        bottom:0;
        display:flex;
        flex-direction:row;
        justify-content:space-around;

    `
    const LightTimesLeft = styled.View`

        width:50%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;

    `
    const LightTimesRight = styled.View`

        width:50%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;

    `
    const LightTimesData = styled.View`

        width:40%;
        height:100%;
        justify-content:center;

    `
    const FirstLight = styled.Text`

        font-size:15px;

    `
    const Sunrise = styled.Text`

        font-size:15px;

    `
    const Sunset = styled.Text`

        font-size:15px;

    `
    const LastLight = styled.Text`

        font-size:15px;

    `

// Tidal Data Styling
    const TidalGraphHeader = styled.Text`

        color:#000000;
        font-size:18px;
        margin-left:10px;
        margin-top:10px;

    `


export default OverviewScreen