'use client'
import React, { useEffect, useState } from 'react'
import { Link as LinkScroll} from 'react-scroll/modules'
export default function Welcome() {
  
















  const [dots , setdot] = useState('dot1')
  const [scrollheigh , setScrollHeight] = useState(0)

  const handleScroll = () => {
    const scrollheight = window.scrollY;
    setScrollHeight(scrollheight);

    
    if(scrollheight > 0){
      if(scrollheight < 600){
        setdot('dot1')
      }
    }
  
    if(scrollheight > 600){
      if(scrollheight < 1200){
        setdot("dot2")
      }


    }
    if(scrollheight > 1100 ){
      if( scrollheight < 1800){
               setdot("dot3")

      }

    }
    if(scrollheight > 1900 ){
      if(scrollheight < 2700){
               setdot("dot4")

      }

    }
    if(scrollheight > 2800 ){
      if(scrollheight < 5000){
               setdot("dot5")

      }

    }
    
  };





  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





   
    
  
          


   
  
  









  return (
    <div id='Welcome' className="welcome">

    <div  className="dots">
       
       {
        dots == "dot1" ?        <LinkScroll to='Welcome' spy={true} offset={50} smooth={true}  duration={500} className="dot1 bg-blue-500"></LinkScroll> :        <LinkScroll to='Welcome' spy={true} offset={50} smooth={true}  duration={500} className="dot1 bg-gray-300"></LinkScroll>
       }
        {
        dots == "dot2" ?        <LinkScroll to='Portfolio' spy={true} offset={50} smooth={true}  duration={500}  className="dot2 bg-blue-500"></LinkScroll> :        <LinkScroll to='Portfolio' spy={true} offset={50} smooth={true}  duration={500} className="dot2 bg-gray-300"></LinkScroll>
       }
        {
        dots == "dot3" ?        <LinkScroll to='Experience' spy={true} offset={50} smooth={true}  duration={500} className="dot3 bg-blue-500"></LinkScroll> :        <LinkScroll to='Experience' spy={true} offset={50} smooth={true}  duration={500} className="dot3 bg-gray-300"></LinkScroll>
       }
        {
        dots == "dot4" ?        <LinkScroll to='Plans' spy={true} offset={50} smooth={true}  duration={500}  className="dot4 bg-blue-500"></LinkScroll> :        <LinkScroll to='Plans' spy={true} offset={50} smooth={true}  duration={500}className="dot4 bg-gray-300"></LinkScroll>
       }
        {
        dots == "dot5" ?        <LinkScroll to='Contact' spy={true} offset={50} smooth={true}  duration={500} className="dot5 bg-blue-500"></LinkScroll> :        <LinkScroll to='Contact' spy={true} offset={50} smooth={true}  duration={500} className="dot5 bg-gray-300"></LinkScroll>
       }


         
    </div>
    <div  className="welcomeframe flex  ">

          <div className="welcometittle  ">
         <div className="firtline flex gap-1 align-center">Designing <span className='text-blue-500'>Digital</span> </div>
         <div className="secondline flex align-center gap-1">Success <span className='text-blue-500'>Paths</span> </div> 
          
           
          </div>

          <div className="welcomesections flex align-center">
            
            <div className="backend">
                
                <div className="logo  p-5   ">
    <img src={'/backendlogo.png'} width={200} height={300} alt="" /> 

    
            

                </div>

                <div className="sectionstittle">Backend Developer</div>
                <div className="sectionsabout text-gray-500 ">I Am Backend Developer Already 2 Years For Backend  I Am Using Node.js And Express </div>
          

            </div>
            <div className="Frontend">
                
                <div className="logo  p-5   ">
    <img src={'/about01.png'} width={600} height={300} alt="" /> 

    
            

                </div>

                <div className="sectionstittle">Frontend Developer</div>
                <div className="sectionsabout text-gray-500 ">I AM Frontend Developer Already 3 Years I Am Using React.js For Frontend And Also I AM Using Tailwindcss For Fast Production</div>
          

            </div>
            <div className="backend">
                
                <div className="logo  p-5   ">
    <img className='fullstacklogo' src={'/about04.png'} width={500} height={300} alt="" /> 

    
            

                </div>

                <div className="sectionstittle">Fullstack Developer</div>
                <div className="sectionsabout text-gray-500 ">I Am Fullstack Developer Already 4 Month i Am Using Mern Stack For Fullstack Development I Have Some Projects You Can Check</div>
          

            </div>
          </div>
          

    </div>


    </div>
  )
}
