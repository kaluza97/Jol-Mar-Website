import React, { Component } from "react";
import "./Styles/menuStyle.scss";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <>
        <div className="menu">
          <NavLink to="/" exact={true} activeClassName="isActive">
            <div className="menuBlock">Strona Główna</div>
          </NavLink>
          <NavLink to="/Offer" activeClassName="isActive">
            <div className="menuBlock">Oferta</div>
          </NavLink>
          <NavLink to="/Gallery" activeClassName="isActive">
            <div className="menuBlock">Galeria</div>
          </NavLink>
          <NavLink to="/Contact" activeClassName="isActive">
            <div className="menuBlock">Kontakt</div>
          </NavLink>
          <NavLink to="/AboutUs" activeClassName="isActive">
            <div className="menuBlock">O Firmie</div>
          </NavLink>
        </div>
      </>
    );
  }
}

export default Menu;
