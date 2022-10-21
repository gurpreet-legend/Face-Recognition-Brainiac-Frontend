import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonDetect }) => {
  return (
    <div>
      <p className="f4 pa2 br2 para">
        {
          "Enter the url of the image and Braniac will detect the face in your picture"
        }
      </p>
      <div className="container pa4 br3 shadow-2 center w-80 mv4">
        <input
          className="input pa2 w-70 mh3"
          type="text"
          placeholder="Enter URL here ..."
          onChange={onInputChange}
        />
        <button
          className="btn pa2 dim w-30 f5 link pointer"
          onClick={onButtonDetect}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
