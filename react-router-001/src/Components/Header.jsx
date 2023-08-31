import React from 'react';
import './style.css';
import { AiFillPhone } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div style={{}}>
      <div style={{display:"flex", justifyContent:"flex-end",textDecoration:"underline", gap:"10px",color:"blue"}}>
        <AiFillPhone /><a href=" ">0509418224</a>
        <HiMail /><a href=" ">enquiry@urbansciencemep.com</a>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", padding:"30px", height:"30%" }}>
        <div style={{fontSize:"36px"}}>
          <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" height="60px" alt=""/>
        </div>
          <div style={{width:"50%", display:"flex", justifyContent:"space-evenly"}}>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/project'>Project</Link>
            <Link to='/service'>Service</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div>
              <button style={{border:"none",height:"41px", width:"130px", borderRadius:"20px", color:"white", backgroundColor:"#596AFF",MarginRight:"10%",fontSize:"15px", cursor:"pointer"}}>Enquire now</button>
          </div>
      </div>
    </div>
  )
}

export default Header;