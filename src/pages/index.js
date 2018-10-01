import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import Hero from '../components/Hero'
import Splash from '../components/Splash'
import styled from 'styled-components'
import Testimonial from '../components/Testimonial';


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`
const SectionCellGroup = styled.p`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Projects = styled.div`
  background: #f5d300;

`

const IndexPage = () => (
  <div>
    <Splash />
    <Section
      image={require('../images/wallpaper-phase.jpg')}
      logo={require('../images/logo-react.png')}
      title="My Expertise"
      text="I am an end to end backend engineer who designes APIs, Databases, Designs backend
      architecture in cloud, deployes them and scale them to millions." />
    <div className="Cards">
      <h2>My projects</h2>
      <div className="CardGroup">
        <Card title="MAD stack" 
        text="Microservices" 
        image={require('../images/wallpaper.jpg')} />
        <Card title="Vue Studio" 
        text="AI platform" 
        image={require('../images/wallpaper.jpg')} />
        <Card title="YellowJacket" 
        text="Load testing platform" 
        image={require('../images/wallpaper.jpg')} />
        <Card title="Kulay" 
        text="Message passing platform" 
        image={require('../images/wallpaper.jpg')} />
      </div>
    </div>
    <Section
  image={require('../images/wallpaper-moon.jpg')}
  logo={require('../images/logo-react.png')}
  title="React for Designers"
  text="Learn how to build a modern site using React and the most 
  efficient libraries to get your site/product online. 
  Get familiar with components, Grid CSS, animations, interactions, dynamic data with 
  Contentful and deploying your site with Netlify." />  
  <SectionCaption>
    The tech stacks I have worked so far
  </SectionCaption>
  <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell 
        title={cell.title}
        image={cell.image} />
    ))}
  </SectionCellGroup>
  </div>
)

export default IndexPage
