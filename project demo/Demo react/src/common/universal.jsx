import React, { Component } from 'react'
// import img1 from '../images/nell-logo.svg'
import img2 from '../images/tick.svg'

export class universal extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/app" id="menu-action">
                <i className="fa fa-bars" style={{marginLeft: '-30px'}}/>
                <span>Close</span>
              </a>
              <a className="navbar-brand" href="/app">
                <img   className="img-fluid" />
              </a>
              <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                <ul className="navbar-nav ml-auto" >
                  <li className="nav-item active" >
                    <a className="nav-link" href="/app"><img src={img2} alt="logo" className="img-fluid" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/app"><p>Logout</p></a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="sidebar">
        <ul>
          <li className="nav-item drop1">
          
          <a className="nav-link py-0" href="/Student">
          <i class="fas fa-tachometer-alt" style={{fontSize:'1.3rem',marginLeft: '-20px'}}></i>
            <span style={{marginLeft: '2rem'}}>Student</span></a>
        
          </li>
       
        </ul>
      </div>
          </React.Fragment>
        )
    }
}

export default universal
