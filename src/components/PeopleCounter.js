import React from 'react'
import { Link } from 'react-router-dom'
const PeopleCounter = () => {
    return (
        <>
        <Link style={{textDecoration:'none',color:'white',marginRight:1200}} to="/"><button style={{ marginTop:40,backgroundColor:"#4267B3",color:"white",borderRadius:5,height:35,width:100}}>HOME</button></Link>
        <div style={{marginLeft:195,dispaly:'inline',textAlign:'left',backgroundColor:'lightcyan',borderRadius:15,marginTop:110,height:310,width:1000,paddingLeft:30}}>
           <h2 style={{paddingTop:10,paddingLeft:345,fontSize:28,fontFamily:'sans-serif'}}>PEOPLE COUNTER</h2>
            <p style={{textAlign:'left',display:'inline',textIndent: '0.5em ',fontSize:24}}>People Counter is widely used in retail industry like Malls and shops to get real-time data analytics. Analytics such as hourly footfalls and peak times at places can make the client more aware of the customer behavior throughout the day. The people counter solution was made using computer vision library OpenCV for Python computer language. The extraction of foreground is the beginning and most essential step in many applications. So, it is very much desirable to estimate the background more reliably and accurately so that it can be implemented in various types of environment. In the past decades many background estimation algorithms have been proposed including Running Gaussian Average, Temporal Median Filter, Mixture of Gaussians and so on.</p>
        </div>
        </>
    )
}

export default PeopleCounter
