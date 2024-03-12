import React from 'react'
import './myStyles.css'
import logo from '../icons/live-chat (1).png'
import { useSelector } from 'react-redux';

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <img src={logo} alt='logo'
        className='welcome-logo' />
      <p>View and text directly to people present
        in the chat Rooms.</p>
    </div>
  )
}

export default Welcome;