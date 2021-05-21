import React from 'react';
import './app-header.css';
import logo from './logo.png'

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <div>
        <img src={logo} alt="logo" className="logo"></img>       
      </div>
      <h1>Organize.Me - планировщик</h1>
      <h2>{toDo} осталось завершить, {done} завершено</h2>
    </div>
  );
};

export default AppHeader;
