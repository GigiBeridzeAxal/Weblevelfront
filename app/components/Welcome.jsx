import React from 'react'

export default function Welcome() {
  return (
    <div className="welcome">

    <div className="dots">
       
       <div className="dot1 bg-blue-500"></div>
       <div className="dot2 bg-gray-300"></div>
       <div className="dot3 bg-gray-300"></div>
         
    </div>
    <div className="welcomeframe flex  ">

          <div className="welcometittle  ">
         <div className="firtline flex gap-1 align-center">Designing <span className='text-blue-500'>Digital</span> </div>
         <div className="secondline flex align-center gap-1">Success <span className='text-blue-500'>Paths</span> </div> 
          
           
          </div>

          <div className="welcomesections flex align-center">
            
            <div className="backend">
                
                <div className="logo bg-gray-200 p-5   ">
    <img src={'/backendlogo.png'} width={200} height={300} alt="" /> 

    
            

                </div>

                <div className="sectionstittle">Backend Developer</div>
                <div className="sectionsabout text-gray-500 ">I Am Backend Developer Already 2 Years For Backend  I Am Using Node.js And Express </div>
          

            </div>
            <div className="Frontend">
                
                <div className="logo bg-gray-200 p-5   ">
    <img src={'/Frontend.png'} width={500} height={300} alt="" /> 

    
            

                </div>

                <div className="sectionstittle">Frontend Developer</div>
                <div className="sectionsabout text-gray-500 ">I AM Frontend Developer Already 3 Years I Am Using React.js For Frontend And Also I AM Using Tailwindcss For Fast Production</div>
          

            </div>
            <div className="backend">
                
                <div className="logo bg-gray-200 p-5   ">
    <img src={'/Fullstack.png'} width={500} height={300} alt="" /> 

    
            

                </div>

                <div className="sectionstittle">Fullstack Developer</div>
                <div className="sectionsabout text-gray-500 ">I Am Fullstack Developer Already 4 Month i Am Using Mern Stack For Fullstack Development I Have Some Projects You Can Check</div>
          

            </div>
          </div>
          

    </div>


    </div>
  )
}
