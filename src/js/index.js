//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//import React, { useState } from 'react'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/trafficlight.jsx";
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render( < TrafficLight / > , document.querySelector("#app"));

{/* const trafficLight = () => {
//        ↓ variable name             ↓ default value
const [ color, setColor] = useState("dark");
//               ⬆ function to change the color

if (color==="dark")
return color(

) */}




{/* } */}