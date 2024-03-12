import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import Users from './components/Users';
import Groups from './components/Groups';
import CreateGroups from './components/CreateGroups';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);

  return (
    <div className={"App" + (lightTheme ? "" : "-dark")} >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='app' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
          <Route path='users' element={<Users />} />
          <Route path='groups' element={<Groups />} />
          <Route path='create-groups' element={<CreateGroups/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;