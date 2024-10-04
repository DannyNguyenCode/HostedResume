import React from 'react'


export const Banner =(props)=>{
    const {title, color}= props;
    return (
        <div style={{background: color, height:"100px", display:"flex",justifyContent:"center", alignItems:"center"}}>
            <h3 style={{color: "white"}}>{title}</h3>
        </div>
    )

}
