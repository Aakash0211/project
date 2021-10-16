import React from 'react'
import { Link } from 'react-router-dom'
const VehicleSpeed = () => {
    return (
        <>
        <Link style={{textDecoration:'none',color:'white',marginRight:1200}} to="/"><button style={{ marginTop:40,backgroundColor:"#4267B3",color:"white",borderRadius:5,height:35,width:100}}>HOME</button></Link>
        <div style={{marginLeft:195,dispaly:'inline',textAlign:'left',backgroundColor:'lightcyan',borderRadius:15,marginTop:110,height:220,width:1000,paddingLeft:30}}>
           <h2 style={{paddingTop:10,paddingLeft:345,fontSize:28,fontFamily:'sans-serif'}}>LIVE ATTENDANCE</h2>
            <p style={{textAlign:'left',display:'inline',textIndent: '0.5em ',fontSize:24}}>It has great significance to acquire vehicle speed for active safety systems.  The vehicle speed can be directly acquired from high-precision GPS device. Such methods can achieve a quite high accuracy. However, the device is too expensive, and GPS is prone to errors due to signal loss in blocked areas, such as trees and tall buildings. Estimating the speed from a traffic camera helps us to cut down the costs
</p>
        </div>
        </>
    )
}

export default VehicleSpeed
