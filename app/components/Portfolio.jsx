'use client'
import React, { useEffect, useState } from 'react'

export default function Portfolio() {

    const [choosed ,setchoosed] = useState('All')
    const [myitopened , setmyitopened] = useState(false)
    const [myitx , setmyitx] = useState()
    const [myity , setmyity] = useState()

    useEffect(() => {   window.addEventListener('mousemove' , (e) => {

        setmyitx(e.clientX + 50)
        setmyity(e.clientY)
    })
},[])

 
    const hiddenmyit = (e) => {
    
        setTimeout(() => {
            setmyitopened(false)
        }, 1000);

 
    }
   
    const changepos = (e) => {
        setmyitx(e.clientX)
          setmyity(e.clientY) 
         setmyitopened(true)
    }

    const changechoosed  = (e) => {

  
        
        setchoosed(e.target.textContent)

    }
  return (
    

    <div className="portfolio bg-gray-50">
        {myitopened == true ? <div className='myitjobscursor bg-gray-300' style={{position:"fixed" , left:myitx , top:myity}} ><img className='portfoliojobsimage' src={'/myitjobs1.png'} width={400} height={400} alt="" /></div> : <div></div>}

        <div id='Portfolio' className="portfolioframe">

            <div className="portfoliotittler">Projects</div>

            <div className=" flex pointer align-center justify-center gap-5 text-gray-500 " >
           Check My Projects Also You Can Check Live Websites too
          </div>
      <br /><br /><br />
            <div className="portfolioposts " >
                <a href='https://my-it-jobs-five.vercel.app/' className="mousecover" onPointerLeave={( ) => setmyitopened(false)} onMouseEnter={ (e) => changepos(e)}>
                <div className="myitjobs   " >
                <div className="postmaintittle">MYITJOBS</div>
                <div className="usedtech">Fullstack & Mern Stack Development</div>
   
            </div>
                    
                </a>

            </div>
           
        </div>
    </div>
  )
}
