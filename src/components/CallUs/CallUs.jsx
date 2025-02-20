import React from 'react'
import s from "./CallUs.module.scss"
import { PiWhatsappLogoThin } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";
const CallUs = () => {
  return (
    <div className={s.section}>
      <div className={s.elem}>
        <PiPhoneCall size={70}/>
        <h5>Contact</h5>
        <p>Click icon to call us</p>
      </div>
      <div className={s.elem}>
        <PiWhatsappLogoThin size={70}/>
        <h5>Whatsapp</h5>
        <p>Contact via Whatsapp</p>
      </div>
    </div>
  )
}

export default CallUs
