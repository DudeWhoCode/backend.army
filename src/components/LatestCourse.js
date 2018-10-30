import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CourseOutline from './Outline'

const LatestCourseGroup = styled.div`
    margin: 50px 50px;
`
const Title = styled.h1`
    margin: 0;
    text-align: center;
`
const CourseTitle = styled.h3`
    text-align: center;
`
const Description = styled.p`
`
const CTAGroup = styled.div`
    text-align: center;
    margin: 50px auto;
`

const CallToAction = styled(Link)`
    display: inline-block;
    color: black;
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px 20px;
    text-transform: uppercase;
    background: #48a699;
    cursor: pointer;
    outline: none;
    ${'' /* TODO: Check why font-* attributes are not working */}
    font-size: 20px;
    font-weight: 700;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); /* Add duration to the .Header button:hover properties,
    cubic-bezier brings up the animation faster and finish it slower */
    &:hover${CallToAction} {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.75);
        transform: translateY(-3px);
    }
`

const LatestCourse = props => (
    <LatestCourseGroup>
        <Title>{props.title}</Title>
        <CourseTitle>
            {props.courseTitle}
        </CourseTitle>
        <Description>
            {props.description}
        </Description>
        <CourseOutline 
            title="What are microservices"
        />
        <CTAGroup>
            <CallToAction to={props.link}>
                {props.cta}
            </CallToAction>
        </CTAGroup>        
    </LatestCourseGroup>
)

export default LatestCourse