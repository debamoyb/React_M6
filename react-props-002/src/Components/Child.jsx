import React from 'react';
import { RiInstallLine } from 'react-icons/ri';

function Child(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "16px",
          boxShadow: "1px 1px 10px black",
        }}
      >
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ display: "flex", alignItems: "center", }}>
              <img style={{borderRadius:"50%"}} src={props.thumbImg} width="20px" height="20px" alt={props.altthumb}/>
            </span>
            <h3>{props.name}</h3>
          </div>
          <h2 style={{ marginTop: "-10px" }}>{props.heading}</h2>
          <p style={{ marginTop: "-10px" }}>{props.para}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "10px", marginTop: "-16px" }}>
              <p>{props.date}</p>
              <p>{props.time}</p>
              <p
                style={{
                  border: "1px solid white",
                  backgroundColor: "Lightgray",
                  borderRadius: "10px",
                  height: "30px",
                  width: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {props.cat}
              </p>
            </div>
            <div>
              <p>
                <RiInstallLine />
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "30%",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={props.mainImg} height="180px" width="350px" alt={props.altImg}/>
        </div>
      </div>
    </div>
  );
}

export default Child;