import React from 'react';

function Contact() {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
        <div>
            <h2 style={{color:"#2B4EDB"}}>| Connect With Us</h2>
            <h3 style={{color:"#2B4EDB"}}>Enquiry</h3>
            <p> enquiry@urbansciencemep.com</p>
            <p> 0509418224</p>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
            <label>Name</label>
            <input style={{height:"30px", width:"260px"}}/>
            <lable>Email</lable>
            <input style={{height:"30px", width:"260px"}}/>
        </div>
    </div>
  )
}

export default Contact;