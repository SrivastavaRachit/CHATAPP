import React from 'react'
import './myStyles.css'
import logo from '../icons/live-chat_512px.png';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className='list-container'>
      <div className={'ug-header' + (lightTheme ? "" : " dark")}>
        <img src={logo} alt='logo' style={{
          height: "2rem", width: "2rem", marginLeft:"10px"}} />

          <p className='ug-title'>Available Groups</p>

      </div>
    </div>
  )
}

export default Groups;