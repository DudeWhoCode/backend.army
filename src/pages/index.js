import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

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

const IndexPage = () => (
  <div>
    <div className="Hero" >
      <div className="HeroGroup">
        <h1>NARENDRAN</h1>
        <br />
        <p>Software Consultant</p>  
        <p>backend | cloud architecting | product engineering</p>
        <Link to="/page-2/">Action item</Link>
        <div className="Logos">
          <img src={require('../images/logo-python.png')} width="50"></img>
          <img src={require('../images/logo-go.png')} width="50"></img>
          <img src={require('../images/logo-aws.png')} width="50"></img>
          <img src={require('../images/logo-azure.png')} width="50"></img>
          <img src={require('../images/logo-postgres.png')} width="50"></img>
          <img src={require('../images/logo-react.png')} width="50"></img>
        </div>
        <Wave />
      </div>
    </div>
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
  image={require('../images/wallpaper2.jpg')}
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
