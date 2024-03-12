import React from 'react'
import Iconst from "../images/icons/icons_Inst_Tele.svg"

 export default function FooterMini( props) {
    const {title, subtitle, text} = props
  return (
    <div className='Footer_Container'> 
        <div>
       <h3><b>{title}</b></h3>
       <h5>{subtitle}</h5>
       <h5>{text}</h5>
       <img src={Iconst} alt="" />
        </div>
      <div>
      <h5>Services</h5>
         <h5>About </h5>
         <h5>Our story</h5>
         <h5>Benefits</h5>
         <h5>Branding</h5>
      </div>
        <div>
          <h5>Legal</h5>
          <h5>Terms & Conditions</h5>
          <h5>Privecy Policy</h5>
          <h5>Terms of use </h5>
        </div>

        <div>
        <h1>SUBSCRIBE NOW</h1>
        <input className='Footer_input' placeholder='Email'/>
        <button className='Footer_btn'>Send</button>
        </div>
    </div>
  )
}

