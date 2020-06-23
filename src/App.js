import React from 'react';
import './App.css';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom'

const  App=()=> {
  return (
    <div>
      <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/firefox">Firefox</NavLink>
        <NavLink activeClassName="active" to="/projects">Proyectos</NavLink>
        <NavLink activeClassName="active" to="/developers">Desarrolladores</NavLink>
        <NavLink activeClassName="active" to="/about">Acerca de</NavLink>
      </nav>
      <Routes/>
    </div>
  );
}

export default App;
