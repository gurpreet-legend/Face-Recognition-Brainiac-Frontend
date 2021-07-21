import React from 'react';

const BoundingBoxList = ({boxParams}) => {
    const BoundingBoxArray = boxParams.map((box,i)=> {
        return(
            <div className='BoundingBox'>
                <div className="bounding-box" style={{top:boxParams[i].topRow, left:boxParams[i].leftCol, bottom:boxParams[i].bottomRow, right:boxParams[i].rightCol}}></div>
            </div>  
        )
    });
    return (
        <div>
            {BoundingBoxArray}
        </div>
    )
}

export default BoundingBoxList ;