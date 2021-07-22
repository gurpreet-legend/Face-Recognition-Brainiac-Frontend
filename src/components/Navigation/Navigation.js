import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn){
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className='btn pa2 ph4 dim f5 link pointer ma2' onClick={()=>{onRouteChange('signout')}}>Sign Out</button>
            </nav>
        )
    }
    else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className='btn pa2 ph4 dim f5 link pointer ma2' onClick={()=>{onRouteChange('signin')}}>Sign In</button>
                <button className='btn pa2 ph4 dim f5 link pointer ma2' onClick={()=>{onRouteChange('register')}}>Register</button>
            </nav>
        )
    }
}

export default Navigation;