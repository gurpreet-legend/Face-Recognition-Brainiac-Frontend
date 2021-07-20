import React from 'react';

const FaceRecognition = ({imageURL}) => {
    return(
        <div>
            <img style={{height:'60vh', width:'auto'}} src={imageURL} alt="faceIMG" />
        </div>
    )
}

export default FaceRecognition;