import React from 'react'
import './myStyles.css'
import logo from '../icons/live-chat (1).png'
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <p>View and text directly to people present
        in the chat Rooms.</p>
    </div>
  )
}

export default Welcome;