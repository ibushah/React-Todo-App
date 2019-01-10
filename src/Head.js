import React from 'react';
import './Head.css'



const Head=(props)=>
{
    let s=
    {
        backgroundColor:"rgb(1,22,150)",
        height:"80px",
        width:"100%"
    }
   return (
       <React.Fragment>
       <div style={s}>
       </div>
       <div  className="container">
       <h1 id="title">{props.title}</h1>
       </div>
       </React.Fragment>
   )
}

export default Head;