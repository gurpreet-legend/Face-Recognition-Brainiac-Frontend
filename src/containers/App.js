import React, {Component} from 'react';
//Imports from Components
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
//Supportive Imports
import Particles from "react-tsparticles";
import 'tachyons';
import './App.css';
//ML Model Import

//Particles-js object
const myObj2 = {
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      
    },
    modes: {
      bubble: {
        distance: 300,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
}
class App extends Component {
  constructor(props) {
    super(props);
    
    //Particles-js methods
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
    
    //State
    this.state = {
      input : ''
    }
  }

  //Particles-js required functions 
  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container);
  }

  //When user enters input 
  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonDetect = () => {
    console.log("Btn clicked.")
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={myObj2}
      />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonDetect={this.onButtonDetect}/>
        {/* <FaceRecognition /> */}
      </div>
    );
  }  
}

export default App;