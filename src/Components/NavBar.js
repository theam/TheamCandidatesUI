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
          <div class="navbar-start">

          </div>
          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Resourses
              </a>
              <div class="navbar-dropdown is-right">
                <a class="navbar-item">
                  Users
                </a>
                <hr class="navbar-divider"/>
                <a class="navbar-item">
                  Candidates
                </a>
                <hr class="navbar-divider"/>
                <a class="navbar-item">
                  Files
                </a>
              </div>
            </div>
            <a class="navbar-item">
              Login
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
