import React from 'react'
import './Splash.css'
import scrollToPosition from '../events/Scroll'

class Splash extends React.Component {
    
    render() {
      return (
        <div className="splash">
            <div className="splash_logo">
                DudeWhoCode
            </div>
            <div className="splash_svg">
                <svg className="FullWidth">
                    <rect className="FullWidth" />
                </svg>
            </div>
            <div className="splash_minimize">
                <svg className="FullWidth">
                    <rect className="FullWidth" />
                </svg>
            </div>
            <div className="text">
                <h2>NARENDRAN</h2>
                <p>Software Consultant</p>
                <button onClick={scrollToPosition}>Know More</button>
            </div>
        </div>
      )
    }
  }
  
  export default Splash