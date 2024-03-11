import React from 'react'
import './myStyles.css'
import Sidebar from './Sidebar';
// import Users from './Users';
// import Groups from './Groups';
import { Outlet } from 'react-router-dom';
// import ChatArea from './ChatArea';
// import Welcome from './Welcome';
// import CreateGroups from './CreateGroups';
// import Users_Groups from './Users_Groups';

const MainContainer = () => {
 
  return (
    <div className='main-container'>
      <Sidebar />

      <Outlet/>
      {/* <Users/> */}
      {/* <Groups/> */}
      {/* <Welcome/> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users_Groups/> */}
    </div>
  )
}

export default MainContainer;