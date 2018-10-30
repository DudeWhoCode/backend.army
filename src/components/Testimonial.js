import React from 'react'
import './Testimonial.css'

const Testimonial = props => (
    <div className="Testimonial">
        <div className="heading">
            <a href={props.linkedIn} target="_blank"><img className="logo" src={props.logo}></img></a>
            <h3>{props.title}</h3>
        </div>        
        <img className="Bg" src={props.image}></img>
        <p>{props.text}</p>
    </div>
)

export default Testimonial