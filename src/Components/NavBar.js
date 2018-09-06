import React, { Component } from 'react'
import logo from '../Media/theam_white.svg';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} alt="Theam logo" width="150"/>
          </a>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">

          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Resourses
              </a>
              <div className="navbar-dropdown is-right">
                <a className="navbar-item">
                  Users
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Candidates
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Files
                </a>
              </div>
            </div>
            <a className="navbar-item">
              Login
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
