'use client'
import React, { useEffect, useState } from 'react'

export default function Contact()
{

  useEffect(() => {

      window.addEventListener('scroll' , (e) =>{
        console.log(window.scrollY)
      })
     
  })
  return (
    <div className="contact">
        <div id='Contact' className="contactframe">
            
            <div className="contactittle">Contact & Info</div>
            
            <div className="infos flex align-center gap-5 ">
                <div className="phone flex  gap-3 justify-center bg-gray-100"> <img src={'/Phone.png'} width={50} alt="" /> +995 593 48 46 36</div>
                <div className="mail flex gap-3 bg-red-100 "><img src={'/Mail.png'} width={50} alt="" /> beridzegigi19@gmail.com</div>

            </div>

            <div className="inputsection">

              <input className='nameinput ' placeholder='Enter Your Name' type="text" />
              <input className='emailinput' placeholder='Enter Your Email ' type="text" />
              <textarea placeholder='Enter Your Text' className='textinput' name="" id="" cols="50" rows="10"></textarea>
              <br /><br />
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Send Message
</button>
<br /><br /><br />

                
            </div>

            
            
 
             
        </div>
    </div>
  )
}
