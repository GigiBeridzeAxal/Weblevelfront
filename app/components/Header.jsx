'use client'
import React from 'react'
import { Link as LinkScroll  } from 'react-scroll/modules'

export default function Header() {
  return (
  <div className="header p-2 flex align-center justify-between ">

   <div className="headerframe ">

    <div className="right">
      <div className="weblevel flex align-center "> <img src="/WLLOGO.png" width={50} alt="" /> <div className="web text-emerald-500">WEB</div> <div className="level">LEVEL</div></div>
    </div>
    <div className="center">
      <div className="sections flex align-center justify-center gap-5">
        <LinkScroll to='Welcome' spy={true} offset={50} smooth={true}  duration={500} className="home cursor-pointer">Home</LinkScroll>
        <LinkScroll to='Portfolio' spy={true} offset={50} smooth={true}  duration={500}  className="portfoliotittle cursor-pointer">Portfolio</LinkScroll>
        <LinkScroll to='Experience' spy={true} offset={50} smooth={true}  duration={500}  className="experiencetittle cursor-pointer">Experience</LinkScroll>
        <LinkScroll to='Plans' spy={true} offset={50} smooth={true}  duration={500}  className="Contacttittle cursor-pointer">Plans</LinkScroll>
        <LinkScroll to='Contact' spy={true} offset={50} smooth={true}  duration={500} className="Contacttittle cursor-pointer">Contact</LinkScroll>
        
      </div>
    </div>
    <div className="left">
      <div className="language">English</div>
    </div>

   </div>

  </div>
  )
}
