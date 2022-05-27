import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand"><RunCircleOutlinedIcon style={{fontSize:"40"}}/><span>        Exercise tracker</span></Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}