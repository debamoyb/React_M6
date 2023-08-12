import React from 'react';
import { MdOutlineBookmarkAdd } from 'react-icons/md';

function Child(props) {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around",margin:"10px",fontFamily:"'vrinda bold', sans-serif"}}>
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ display: "flex", alignItems: "center", }}>
              <img style={{borderRadius:"50%"}} src={props.thumbImg} width="20px" height="20px" alt={props.altthumb}/>
            </span>
            <h3 style={{color:"dimGray"}}>{props.name}</h3>
          </div>
          <div style={{ textAlign:"left"}}>
            <h1 style={{ marginTop: "-10px", fontWeight:"900" }}>{props.heading}</h1>
            <p style={{ marginTop: "-10px", fontWeight:"500",color:"Gray",fontSize:"26.7px" }}>{props.para}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "10px", marginTop: "-16px", fontWeight:"600",color:"Gray",fontSize:"18px"}}>
              <p>{props.date}&nbsp;&nbsp;&#183;</p>
              <p>{props.time}&nbsp;&nbsp;&#183;</p>
              <button style={{border:"none",background:"gainsboro",borderRadius:"20px",color:"grey",fontSize:"18px",marginTop:"10px",padding:"15px",fontWeight:"600",height:"35px",width:"auto",display:"flex",justifyContent:"center",alignItems:"center",}}>{props.cat}</button>
            </div>
            <div style={{color:"gray"}}>
              <h1>
                <MdOutlineBookmarkAdd />
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <img style={{objectFit:"cover"}} src={props.mainImg} height="250px" width="380px" alt={props.altImg}/>
        </div>
      </div>
    </div>
  );
}

export default Child;