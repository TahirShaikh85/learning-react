import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.myMode} bg-${props.myMode}`}>
  <a className="navbar-brand" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <div className="custom-control custom-switch">
      <input type="checkbox" onClick={props.toggleTheme} className="custom-control-input" id="customSwitch1"/>
      <label className={`custom-control-label text-${props.mode === 'dark'?'light':'dark'}`} htmlFor="customSwitch1">Dark mode</label>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {
    title:PropTypes.string
}
Navbar.defaultProps = {
    title:"Title here"
}

export default Navbar