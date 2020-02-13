import React from 'react'
import Particles from 'react-particles-js';

const ParticlesContainer = () =>{
    return(
        <div
            style={{
            width: "100%",
            height: "0",
            backgroundColor: "blue"
            }}
        >
        <Particles
        height={window.outerHeight="1024px"}
        params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
        }} 
        style={{
            backgroundColor: "lightblue" ,
            position:"absolute",
            top:0,
            left:0,
            height:"100%"
          }}
        />
        </div>
    )
}

export default ParticlesContainer;