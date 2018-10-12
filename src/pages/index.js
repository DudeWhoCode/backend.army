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
      architecture in cloud, deployes them and scale them to millions."
      animate="true" />
    <div className="Cards">
      <h2>My projects</h2>
      <div className="CardGroup">
        <Card title="MAD stack" 
        text="Microservices" 
        image={require('../images/wallpaper-galaxy.jpg')} />
        <Card title="Shop the video" 
        text="AI platform" 
        image={require('../images/wallpaper-galaxy.jpg')} />
        <Card title="YellowJacket" 
        text="Load testing platform" 
        image={require('../images/wallpaper-galaxy.jpg')} />
        <Card title="Kulay" 
        text="Message passing platform" 
        image={require('../images/wallpaper-galaxy.jpg')} />
        <Card title="Mine Portal" 
        text="Visualizing whats under the earth" 
        image={require('../images/wallpaper-galaxy.jpg')} />
        <Card title="backend.army" 
        text="coming soon..." 
        image={require('../images/wallpaper-galaxy.jpg')} />
      </div>
    </div>
  <div className="Use">
    <div className="UseGroup">
      <h1>What I use</h1>
      <div className="Subtitle">
        <p>I use some stuffs that aren't completely terrible.</p>
      </div>
      <h2>Infra and Hosting</h2>
      <p>
        Mostly, I use AWS to spin up servers for my personal projects. I use github pages to host this portfolio page. I use Ghost containers hosted in digital ocean servers for my blog
      </p>
      <h2>Version Control</h2>
      <p>
      Since I started working on software from 2013, fortunately I did not struggle with 
      version control systems as my senior devs did. I started using git right away. 
      I host all my public projects in github. For my private repositories, I used Bitbucket for a while. 
      Then explored Gitlab, but some how I liked the simple experience of github's issue tracker and kanban boards. So, I started paying github for private repositories.
      </p>
      <h2>IDE and Editors</h2>
      <p>
        I started loving emacs from the day one. When I am not using terminal I will be using Pycharm for python and Gogland for Go programming. I pay for them as they make me more productive with lots of features and integrations. I use Sublime Text as my html and markdown editor.
      </p>
      <h2>OS</h2>
      <p>
        Ubuntu, Debian in servers and OS X in laptop.
      </p>
    </div>
  </div>
  <div className="Testimonials">
    <h2>Here's what people say about me</h2>
    <div className="TestimonialsGroup">
      <Testimonial 
        title="Naresh Kumar Pidikiti"
        text="A smart worker, always with a curiosity to explore technology. He built complex systems with simple interfaces."
        image={require('../images/wallpaper-hills.jpg')}
        logo={require('../images/logo-linkedin.png')}
        linkedIn="https://www.linkedin.com/in/naresh-kumar-p-95a6741a/"
      />
      <Testimonial 
        title="Senthil Velan"
        text="Naren helped us to showcase multiple prototypes for our client visits. His knack for rapid prototyping always amazes me."
        image={require('../images/wallpaper-hills.jpg')}
        logo={require('../images/logo-linkedin.png')}
        linkedIn="https://www.linkedin.com/in/jsvelan/"
      />
      <Testimonial 
        title="Saravana Kumar"
        text="I have worked with Naren in many projects at scale. Here are some words I would use to describe him: Result oriented, Vision focused, quality and timely delivery and most importantly consistency."
        image={require('../images/wallpaper-hills.jpg')}
        logo={require('../images/logo-linkedin.png')}
        linkedIn="https://www.linkedin.com/in/saravanakumar-karunanithi-a5bb8b10/"
      />
    </div>
  </div>
  {/* <SectionCaption>
    The tech stacks I have worked so far
  </SectionCaption>
  <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell 
        title={cell.title}
        image={cell.image} />
    ))}
  </SectionCellGroup> */}
  </div>
)

export default IndexPage
