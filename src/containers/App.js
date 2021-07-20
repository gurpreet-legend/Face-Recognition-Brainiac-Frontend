import React, {Component} from 'react';
//Imports from Components
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
//Supportive Imports
import Particles from "react-tsparticles";
// import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';
//ML Model Import
import Clarifai from 'clarifai';

//Creating a Clarifai App
const app = new Clarifai.App({
  apiKey: 'ae99589fa35f4d3fa4c813c2186a2e00'  //ADD IT TO .env file LATER !!!!!!!
 });

//Particles-js object
const myObj = {
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: false,
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
      enable: false,
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
      speed: 1,
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
      value: 4,
    },
  },
  detectRetina: true,
}
class App extends Component {
  constructor(props) {
    super(props); 

    // Particles-js 
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);  

    //State
    this.state = {
      input : '',
      imageURL : ''
    }
  }

  //Particles-js functions
  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container);
  }
//output[0].data.regions[0].region_info.bounding_box
  //Event functions
  onInputChange = (event) => {
    this.setState({input : event.target.value});
  }

  onButtonDetect = () => {
    // console.log("Btn clicked.");
    this.setState({imageURL : this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then( res => {
      let regionBoundaries = res.outputs[0].data.regions.map((person,index) => ({
        id : index,
        bounding_box : person.region_info.bounding_box
      }))
      console.log(regionBoundaries);
      },
      err => {
        //There was some error
      })
  }

  render() {
    return (
      <div className="App">
        <Particles 
        className='particles'
        params={myObj} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonDetect={this.onButtonDetect}/>
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }  
}

export default App;