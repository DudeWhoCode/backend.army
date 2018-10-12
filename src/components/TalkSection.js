import React from 'react'
import Styled from 'styled-components'



const TalkGroup = Styled.div`
    margin: 50px 100px 50px 100px;
    
`

const Title = Styled.h1`
  padding: 20px 20px;
  text-align: center;
`

const Abstract = Styled.p`
  padding: 20px 20px;
    
`

const Events = Styled.p`
  padding: 20px 20px; 
`

const Video = Styled.div`
  padding: 20px 20px;
`

const Slides = Styled.div`
  padding: 20px 20px;
`

const CodeSnippets = Styled.a`
  padding: 20px 20px;
  
`

const End = Styled.hr`
height: 2px;
margin-top: 30px;
color: black;
background-color: black;
border: none;
`

const TalkSection = props => {
  return (
    <TalkGroup>
        <Title>{props.title}</Title>
        <Abstract>{props.abstract}</Abstract>
        <Events><b>Events: </b>{props.events}</Events>
        { props.video ? <Video>{props.video}</Video> : "" }
        <Slides>{props.slides}</Slides>
        { props.code ? <CodeSnippets><a href={props.code}>Code snippets</a></CodeSnippets> : "" }
        <End />
    </TalkGroup>
  )
}

export default TalkSection