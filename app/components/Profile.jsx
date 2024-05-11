import React from 'react'

export default function Profile() {
  return (
   <div id='Profile' className="profile">


<div className="profileframe">

     <div className="left">

       <div className="profilename flex align-center justify-center gap-2">Hello, I'am <span className='GIGIBERIDZE text-emerald-500' >GIGI <span className='text-black'>BERIDZE</span></span></div>
       <div className="profiledesc text-gray-500">Have you decided to create a website for your brand or store? Then I can help you plan and create any website. Check out my portfolio, experiences, live projects, good luck and contact me.</div>
     <div className="profilebtns flex gap-4">
     <button class="bg-blue-500 hover:bg-blue-700 flex align-center  text-white font-bold py-2 px-4 border border-blue-700 rounded">
  <img src="/Portfolio.png" width={20} alt="" /> Portfolio
</button>
<button className='profilecontact flex align-cneter gap-4' > <img src="/Phonemsg.png" width={20} alt="" /> Contact</button>
     </div>
     </div>
     <div className="right"><img src="/Profile.png" width={300} alt="" /></div>


</div>


   </div>
  )
}
