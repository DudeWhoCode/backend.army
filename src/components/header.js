import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/talks">Talks</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/buy"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
