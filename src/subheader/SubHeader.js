import React, { Component } from "react";
import "./SubHeader.css";

class SubHeader extends Component {
  render() {
    return (
      <div className="sub__header">
        <div className="button__section">
          <button className="btn btn-transparent shadow-sm"> EDIT </button>
          <button className="btn btn-transparent shadow-sm"> DELETE </button>
        </div>

        <div className="status__section d-flex align-items-center">
          <span>
            <span className="font-weight-bold"> Subscription </span> : All (267)
            | Active (99) | Inactive (68)
          </span>
        </div>

        <div className="search__section d-flex justify-content-end">
          <form>
            <div className="input__container">
              <span className="search__icon">
                <ion-icon name="search-outline"></ion-icon>
              </span>
              <input
                type="text"
                className="form-control mysearch"
                id="search"
                placeholder="Search customers..."
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SubHeader;
