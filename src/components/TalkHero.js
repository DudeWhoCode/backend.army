import React from 'react'
import Link from 'gatsby-link'
import './TalkHero.css'

class TalkHero extends React.Component {
  render() {
    return (
    <div className="Hero" >
        <div className="HeroGroup">
          <h1>It usually takes me more than three weeks to prepare a good impromptu speech.</h1>
          <p>– Mark Twain</p>
        </div>
      </div>
    )
  }
}

export default TalkHero
