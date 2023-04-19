import React from "react";

const TrafficLight = () => {

const [brillo,setBrillo]=useState("bg-dark")

function encendido(){
    if(brillo==="bg-dark"){
        setBrillo("bg-dark")
    }else{
        setBrillo("bg-light")
    }
}
	return (

         <div className="container">
            <div className ="bg-dark height:'20px'" style={{borderRadius:'50px'}} >
                <p className="bg-red text-primary rounded-circle text-center " style={{borderRadius:'50px'}}>Hola </p>  
            </div>
            
             <p>Hola </p>  
            <p>Hola </p>  

        </div>
        // <div className="text-center">
		// 	<div className="container text-center" style={{backgroundColor:"black", height:"100px",width:"20px"}}></div>
			
		// 	<div className="container text-center" style={{backgroundColor:"black", height:"400px",width:"150px"}}>
        //         <button style={{backgroundColor:"red", borderRadius:"50px",height:"20%",width:"65%",marginBottom:"30px",marginTop:"40px"}}></button>
        //         <button style={{backgroundColor:"yellow", borderRadius:"50px",height:"20%",width:"65%",marginBottom:"30px"}}></button>
        //         <button style={{backgroundColor:"green", borderRadius:"50px",height:"20%",width:"65%",marginBottom:"30px"}}></button>
        //     </div>
        // </div>
    );
};






export default TrafficLight ;