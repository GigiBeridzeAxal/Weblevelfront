import React from 'react'

export default function Header() {
  return (
  <div className="header p-2 flex align-center justify-between ">

   <div className="headerframe ">

    <div className="right">
      <div className="weblevel flex align-center "><div className="web text-emerald-500">WEB</div> <div className="level">LEVEL</div></div>
    </div>
    <div className="center">
      <div className="sections flex align-center justify-center gap-5">
        <div className="home">Home</div>
        <div className="portfoliotittle">Portfolio</div>
        <div className="experiencetittle">Experience</div>
        <div className="Contacttittle">Contact</div>
        
      </div>
    </div>
    <div className="left">
      <div className="language">English</div>
    </div>

   </div>

  </div>
  )
}
