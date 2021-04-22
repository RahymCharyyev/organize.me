import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex"> 
      <img alt="logo" className="logo" src="./om.png"></img>
      <h1>Organize.Me - планировщик</h1>
      <h2>{toDo} осталось завершить, {done} завершено</h2>
    </div>
  );
};

export default AppHeader;
