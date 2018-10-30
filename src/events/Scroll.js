import React from 'react'
import Scroll from 'react-scroll';


export default function scrollToPosition () {
    console.log("Scroll called")
    var scroll = Scroll.animateScroll
    scroll.scrollTo(400)
}