import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';


const JourneyGroup = styled.div`
    background: url(${props => props.image});
    background-position: 0 -200px;
    height: 520px; 
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`

const JourneyTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    padding-top: 50px;
    grid-gap: 20px;
    ${'' /* grid-template-rows: auto 100%; */}
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const JourneyTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`
const JourneyText = styled.p`
    color: white;

`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -9px;
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -140px;
    ${'' /* transform: rotate(180deg); */}
`

const Journey = props => (
    <JourneyGroup image={props.image}>       
        <WaveTop><Wave 
            color="black" 
            animate={props.animate}
        /></WaveTop>
        <WaveBottom><Wave 
            color="#f5d300" 
            animate={props.animate}
        /></WaveBottom>
        {/* <JourneyLogo src={props.logo}/> */}
        <JourneyTitleGroup>
            <JourneyTitle>{props.title}</JourneyTitle>
            <JourneyText>{props.text}</JourneyText>
        </JourneyTitleGroup>
    </JourneyGroup>
)

export default Journey