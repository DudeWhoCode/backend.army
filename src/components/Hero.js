import React from 'react'
import Link from 'gatsby-link'
import './Hero.css'
import Wave from './Wave'

class Hero extends React.Component {
  render() {
    return (
    <div className="Hero" >
        <div className="HeroGroup">
          <h1>&#123;backend.army&#125;</h1>
          <br />
          <p>Scale your backend skills to the Cloud</p>  
          <Link to="/page-2/">know more</Link>
          {/* <div className="Logos">
            <img src={require('../images/logo-python.png')} width="50"></img>
            <img src={require('../images/logo-go.png')} width="50"></img>
            <img src={require('../images/logo-aws.png')} width="50"></img>
            <img src={require('../images/logo-azure.png')} width="50"></img>
            <img src={require('../images/logo-postgres.png')} width="50"></img>
            <img src={require('../images/logo-react.png')} width="50"></img>
          </div> */}
          <Wave />
        </div>
      </div>
    )
  }
}

export default Hero
