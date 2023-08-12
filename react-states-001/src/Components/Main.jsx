import React, { useState } from "react";

function Main() {
  const [state, setState] = useState(false);
  function darkMode() {
    setState(!state);
  }
  const container = {
    minHeight:"100vh",
    display:"flex",
    justifyContent:"center",
    background: state ? "#282C35" : "#F5F5F5",
    fontFamily:"'vrinda bold', sans-serif"
  }
  const header = {
    margin:"40px auto 100px",
    color: state ? "#FDFCFC" : "#2D3238"
  }
  const head = {
    color: state ? "#FFA9BC" : "#C9356A",
    margin:"0 auto",
    fontSize:"28px",
    letterSpacing:"1px"
  }
  const para = {
    color: state ? "#D3C8D3" : "#5A5A5A",
    margin:"0 auto 40px",
    fontSize:"12px"
  }
  const toggleBt = {
    border:"none",
    height:"30px",
    width:"80px",
    borderRadius:"10px",
    fontSize:"15px",
    fontWeight:"600",
    marginTop:"40px",
    marginLeft:"-50px",
    background: state ? "#FFA9BC" : "#C9356A",
    color: state ? "#2D3238" : "#FFFFFF",
    cursor: "pointer"
  }
  return (
    <div style={container}>
        <div>
            <h1 style={header}>Overreacted</h1>
            <div>
                <h3 style={head}>The WET Codbase</h3>
                <p style={para}>
                    <i>Sunday 4th, 2020 &nbsp; 11 min read </i>
                    <br /><br /> come waste your time with me
                </p>
            </div>
            <div>
                <h3 style={head}>Goodby, Clean Code</h3>
                <p style={para}>
                    <i>Friday 22nd, 2019 &nbsp; 5 min read </i>
                    <br /><br /> Let clean code guide you. Then let it go.
                </p>
            </div>
            <div>
                <h3 style={head}>My Decade In Review</h3>
                <p style={para}>
                    <i>Saturday 11th, 2018 &nbsp; 5 min read </i>
                    <br /><br /> A personal reflection.
                </p>
            </div>
            <div>
                <h3 style={head}>What Are The React Team Principles</h3>
                <p style={para}>
                    <i>Thursday 4th, 2015 &nbsp; 5 min read </i>
                </p>
            </div>
        </div>
        <button onClick={darkMode} style={toggleBt}>Toggle</button>
    </div>
  );
}

export default Main;