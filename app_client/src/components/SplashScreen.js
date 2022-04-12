import React from 'react'

import splash from '../assets/splash.png'

const style = {top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  position: 'fixed',
  width: '100%'
};

const SplashScreen = () => {
  return (
    <>
     <img src={splash} style={style}/> 
    </>
  )
}

export default SplashScreen
