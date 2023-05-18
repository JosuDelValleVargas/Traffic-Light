import React, { useState } from "react";

const TrafficLight = () => {

    const [brillo1, setBrillo1] = useState("")
    const [brillo2, setBrillo2] = useState("")
    const [brillo3, setBrillo3] = useState("")

    function encendido1() {
        // if (brillo === "") {
        //     setBrillo("0 0 40px #fff")
        // } else {
        //     setBrillo("")
        // }

        // condicion ? true : false
        brillo1 === ""
            ? setBrillo1("0 0 100px #fff")
            : null

        brillo2 !== ""
            ? setBrillo2("")
            : null

        brillo3 !== ""
            ? setBrillo3("")
            : null

    };

    function encendido2() {
        brillo2 === ""
            ? setBrillo2("0 0 100px #fff")
            : null

        brillo1 !== ""
            ? setBrillo1("")
            : null

        brillo3 !== ""
            ? setBrillo3("")
            : null

    };

    function encendido3() {
        brillo3 === ""
            ? setBrillo3("0 0 100px #fff")
            : null

        brillo1 !== ""
            ? setBrillo1("")
            : null

        brillo2 !== ""
            ? setBrillo2("")
            : null
    };



    return (
        <div className="w-50 mx-auto">
            <div className="bg-dark mx-auto" style={{ height: "120px", width: "80px" }}></div>
            <div className="w-50 mx-auto py-4 d-flex flex-column align-items-center bg-dark rounded-5">
                <div className="bg-danger rounded-circle my-2 " style={{ height: "200px", width: "200px", boxShadow: brillo1 }} onClick={encendido1}></div>
                <div className="bg-warning rounded-circle my-2" style={{ height: "200px", width: "200px", boxShadow: brillo2 }} onClick={encendido2}></div>
                <div className="bg-success rounded-circle my-2" style={{ height: "200px", width: "200px", boxShadow: brillo3 }} onClick={encendido3}></div>
            </div>
        </div>

    );


};




export default TrafficLight;