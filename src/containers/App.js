import React, { Component } from "react";

//Imports from Components
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import Rank from "../components/Rank/Rank";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';

//Supportive Imports
import Particles from "react-tsparticles";
import "tachyons";
import "./App.css";

//ML Model Import
import Clarifai from "clarifai";

//Creating a Clarifai App
const app = new Clarifai.App({
  apiKey: "ae99589fa35f4d3fa4c813c2186a2e00", //ADD IT TO .env file LATER !!!!!!!
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
};
class App extends Component {
  constructor(props) {
    super(props);

    // Particles-js
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);

    //State
    this.state = {
      input: "",
      imageURL: "",
      boxParams: [],
      route: "signout",
      isSignedIn: false
    };
  }

  //Particles-js functions
  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container);
  }

  //Event functions
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonDetect = () => {
    this.setState({ imageURL: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((res) => {
        let myArr = res.outputs[0].data.regions.map(
          person => (person.region_info.bounding_box)
        );
        this.displayFaceBox((this.calculateFaceLocation(myArr)));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if(route == "home") {
      this.setState({isSignedIn: true})
    }
    else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }

  //Facial Box Functions
  calculateFaceLocation = (myArr) => {
    let image = document.getElementById('inputImage');
    let height = Number(image.height);
    let width = Number(image.width);
    let boxBoundaries = myArr.map((element)=>{
      return {
        topRow : (element.top_row*height),
        leftCol : (element.left_col*width),
        bottomRow : height - (element.bottom_row*height),
        rightCol : width - (element.right_col*width)
      }
    });

    return boxBoundaries;
  };

  displayFaceBox = (boxBoundaries) => {
    this.setState({boxParams : boxBoundaries})
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={myObj} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        {this.state.route == 'home' ? 
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonDetect={this.onButtonDetect}
            />
            <FaceRecognition boxParams={this.state.boxParams} imageURL={this.state.imageURL} />
          </div> :
          (this.state.route=='register' ?
          <Register onRouteChange={this.onRouteChange} /> :
          <Signin onRouteChange = {this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
