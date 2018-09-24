import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave';


const IndexPage = () => (
  <div>
    <div className="Hero" >
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <br />
        <p>Welcome to my portfolio</p>  
        <p>I am a software consultant.</p>
        <Link to="/page-2/">Action item</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"></img>
          <img src={require('../images/logo-figma.png')} width="50"></img>
          <img src={require('../images/logo-studio.png')} width="50"></img>
          <img src={require('../images/logo-framer.png')} width="50"></img>
          <img src={require('../images/logo-react.png')} width="50"></img>
          <img src={require('../images/logo-swift.png')} width="50"></img>
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
  </div>
)

export default IndexPage
