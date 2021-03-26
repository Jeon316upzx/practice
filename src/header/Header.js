import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="my__header d-flex justify-content-between align-items-center">
        <div>
          <h3> Your Customer</h3>
        </div>
        <div>
          <button className="btn btn-success my__btn add shadow-sm">
            <ion-icon name="person-add-outline" className="my__icon"></ion-icon>
            <span> ADD CUSTOMER </span>
          </button>
          <button className="btn btn-success my__btn shadow-sm">
            <ion-icon name="exit-outline" className="my__icon"></ion-icon>
            <span> EXPORT CSV </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
