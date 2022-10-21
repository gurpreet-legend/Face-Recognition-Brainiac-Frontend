import React from "react";
import "./FaceRecognition.css";
import BoundingBoxList from "../BoundingBoxList/BoundingBoxList.js";

const FaceRecognition = ({ imageURL, boxParams }) => {
  return (
    <div className="center ma">
      <div className="relative mt2">
        <img
          id="inputImage"
          style={{ height: "60vh", width: "auto" }}
          src={imageURL}
          alt="faceIMG"
        />
        <BoundingBoxList boxParams={boxParams}></BoundingBoxList>
        <div
          className="bounding-box"
          style={{
            top: boxParams.topRow,
            left: boxParams.leftCol,
            bottom: boxParams.bottomRow,
            right: boxParams.rightCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
