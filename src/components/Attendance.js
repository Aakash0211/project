import React from 'react'
import { Link } from 'react-router-dom'
const Attendance = () => {
    return (
        <>
        <Link style={{textDecoration:'none',color:'white',marginRight:1200}} to="/"><button style={{ marginTop:40,backgroundColor:"#4267B3",color:"white",borderRadius:5,height:35,width:100}}>HOME</button></Link>
        <div style={{marginLeft:195,dispaly:'inline',textAlign:'left',backgroundColor:'lightcyan',borderRadius:15,marginTop:110,height:280,width:1000,paddingLeft:30}}>
           <h2 style={{paddingTop:10,paddingLeft:345,fontSize:28,fontFamily:'sans-serif'}}>LIVE ATTENDANCE</h2>
            <p style={{textAlign:'left',display:'inline',textIndent: '0.5em ',fontSize:24}}>Student Attendance mainframe structure is
defined to manage the student's class attending files using the
concept of face detection and recognition through open
computer vision. The principle reason this system has been put
forward is to improve the traditional attendance system of
various universities to avoid the misuse of time and assets. The
pointing-sides of automation world have forced an idea of
switching from standard attendance to the digital system by
using face detection and recognition methods. This is how the
Student Attendance structure is being developed by
introducing the dataset of an individual</p>
        </div>
        </>
    )
}

export default Attendance
