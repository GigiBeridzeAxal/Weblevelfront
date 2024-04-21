'use client'
import React, { useState } from 'react'

export default function Portfolio() {

    const [choosed ,setchoosed] = useState('All')
    const [myitopened , setmyitopened] = useState(false)
    const [myitx , setmyitx] = useState()
    const [myity , setmyity] = useState()

    window.addEventListener('mousemove' , (e) => {

        setmyitx(e.clientX + 50)
        setmyity(e.clientY)
    })

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
    

    <div className="portfolio">
        {myitopened == true ? <div className='myitjobscursor bg-gray-300' style={{position:"fixed" , left:myitx , top:myity}} ><img className='portfoliojobsimage' src={'/myitjobs1.png'} width={400} height={400} alt="" /></div> : <div></div>}

        <div className="portfolioframe">

            <div className="portfoliotittler">Projects</div>

            <div className="skillchooser flex pointer align-center justify-center gap-5  " >
                {choosed == "All"  ?            <div className="Allportfolio bg-emerald-500 pointer text-white" onClick={(e) => changechoosed(e)}>All</div> : 
                            <div className="Allportfolio pointer text-gray-500" onClick={(e) => changechoosed(e)}>All</div> }
                                          {choosed == "Frontend"  ?                           <div className="Frontendportfolio bg-emerald-500 text-white  " onClick={(e) => changechoosed(e)}>Frontend </div> : 
                                           <div className="Frontendportfolio pointer text-gray-500 " onClick={(e) => changechoosed(e)}>Frontend</div> }

{choosed == "Backend"  ?                                          <div className="backendportfolio pointer text-white bg-emerald-500 " onClick={(e) => changechoosed(e)}>Backend</div> : 
                                                          <div className="backendportfolio pointer text-gray-500 " onClick={(e) => changechoosed(e)}>Backend</div> }


{choosed == "Fullstack"  ?                                        
                <div className="fullstackportfolio pointer bg-emerald-500 text-white" onClick={(e) => changechoosed(e)}>Fullstack</div> : 
                                                     
                <div className="fullstackportfolio pointer text-gray-500" onClick={(e) => changechoosed(e)}>Fullstack</div> }



        
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
