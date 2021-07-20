import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-2 center mv3" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner center">
                    <img src={brain} alt="" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;