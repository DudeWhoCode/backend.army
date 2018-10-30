import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
    background: #1d2224;
    height: 420px; 
    display: grid;
    grid-template-columns: 50% auto;
    grid-gap: 20px;
    position: relative;
    @media (max-width: 720px) {
        height: 820px;
        grid-template-columns: none;
        grid-template-rows: 30% auto;
    }
`

const SectionImgGroup = styled.div`
    margin: 0 auto;
    height: 245px;
`

const SectionLogo = styled.img`
    width: 420px;
    padding-top: 40px;
    @media (max-width: 640px) {
        width: 320px;
    }
`
const SectionTitleGroup = styled.div`
    display: grid;
    margin: 0 40px;
    padding-top: 50px;
    display: inline;
    grid-gap: 20px;
    grid-template-rows: auto 100%;
    ${'' /* grid-template-rows: repeat(2, 1fr); */}

    @media (max-width: 720px) {
        grid-template-rows: 1fr; 
        text-align: justify;
    }
`

const SectionTitle = styled.h1`
    margin: 0;
    line-height: 1.2;
    @media (max-width: 720px) {
        font-size: 40px;
    }
`
const SectionText = styled.p`

`

const Section = props => {

    if (props.swap === "true") {
        return(
            <SectionGroup image={props.image}>
            <SectionTitleGroup>
                <SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>
            </SectionTitleGroup>
            <SectionImgGroup>
                <SectionLogo src={props.logo}/>
            </SectionImgGroup>
    </SectionGroup>
        )
    } else {
        return(
            <SectionGroup>
                <SectionImgGroup>
                    <SectionLogo src={props.logo}/>
                </SectionImgGroup>
                <SectionTitleGroup>
                    <SectionTitle>{props.title}</SectionTitle>
                    <SectionText>{props.text}</SectionText>
                </SectionTitleGroup>
            </SectionGroup>
        )
    }
}

export default Section