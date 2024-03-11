import React from 'react'
import './myStyles.css'
import { IconButton } from '@mui/material';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

const CreateGroups = () => {
  return (
    <div className='createGroups-container'>
      <input placeholder='Enter Group Name' className='search-box'/>

      <IconButton>
        <DoneOutlineOutlinedIcon/>
      </IconButton>
    </div>
  )
}

export default CreateGroups;