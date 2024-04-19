'use client'
import React, { useState } from 'react'

export default function Portfolio() {
    const [choosed ,setchoosed] = useState('All')
    const changechoosed  = (e) => {

  
        
        setchoosed(e.target.textContent)

    }
  return (

    <div className="portfolio">
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
        </div>
    </div>
  )
}
