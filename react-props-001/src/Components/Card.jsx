import React from 'react'

function Card(props) {
   const a=`${props.clo}`
   
  return (
    <div style={{margin:"20px auto"}}>
        <div style={{height:"260px", width:"170px", boxShadow:"0 0 5px black", margin:"0 30px"}}>
            <div style={{height:"70%",width:"100%", backgroundColor:a}}></div>
            <div style={{margin:"15px"}}>
                <h2 style={{margin:"5px 0"}}> {props.code}</h2>
                <h5 style={{marginTop:"-10px", color:a}}>{props.name}</h5>
            </div>
        </div>
    </div>
  )
}

export default Card