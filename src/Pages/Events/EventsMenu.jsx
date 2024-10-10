import React from 'react'
import "./EventsMenu.css"

const EventsMenu = ({onClick}) => {
  return (
    <>
    <div class="menu-button" onClick={() => {
      console.log('Menu button clicked');
      onClick() ;
    }} >
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
      </div>
    </>
      
  )
}

export default EventsMenu