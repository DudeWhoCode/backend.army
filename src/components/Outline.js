import React from 'react'
import styled from 'styled-components'


const OutlineGroup = styled.div`
    position: inherit;
    left: 20px;
    max-width: 800px;
    ${'' /* margin: 0 70px 100px; */}
    align-self: center;
    margin: auto 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    padding: 0 20px;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    ${'' /* font-size: 20px; */}

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);   
        margin: auto 20px;     
  }
`

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 320px auto;
    grid-gap: 25px;
    align-items: center;
    color: #71858d;
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
`

const CellTitle = styled.div`
    font-size: 15px;
    border-bottom: 1px solid #48a699;
    padding: 30px 0;
`

const CourseOutline = props => (
    <OutlineGroup>
    <CellGroup>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Getting started with django</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>REST API design</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Ansible</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Chef</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Puppet</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Kubernetes</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Docker</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to CircleCI</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Testing</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Python</CellTitle>
    </CellGroup>
    <CellGroup>
        <CellTitle>Introduction to Golang</CellTitle>
    </CellGroup>
    </OutlineGroup>
)

export default CourseOutline