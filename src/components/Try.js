import React from 'react'
import { Link } from 'react-router-dom'

const Try = () => {

    return (
        <>

        <h1 style={{fontFamily:'sans-serif',fontStyle:'inherit',fontWeight:'bolder',fontSize:40}}>CAMERA NERVE CENTER</h1>
        <hr color="black" style={{opacity:'0.2'}}/>
        <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:25}}>
        <Link style={{textDecoration:'none',color:'white'}} to="/peoplecounter"><button style={{ backgroundColor:"#4267B3",color:"white",borderRadius:5,height:45,width:170}}>PEOPLE COUNTER</button></Link>
        <Link style={{textDecoration:'none',color:'white'}} to="/attendance"><button onClick={{}} style={{ backgroundColor:"red",   color:"white",borderRadius:5,height:45,width:170}}>LIVE ATTENDANCE</button>  </Link>  
        <Link style={{textDecoration:'none',color:'white'}} to="/speed"><button onClick={{}} style={{ backgroundColor:"green",  color:"white",borderRadius:5,height:45,width:170}}>SPEED ESTIMATION </button>  </Link>
    </div>
           </>
    )
}

export default Try
