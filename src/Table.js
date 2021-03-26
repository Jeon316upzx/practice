import React, { Component } from "react";
import "./Table.css";

class TableHead extends Component {
  render() {
    return (
      <thead className="table__header">
        <tr>
          <th className="my__head"> </th>
          <th className="my__head"> NAME </th>
          <th className="my__head"> EMAIL </th>
          <th className="my__head"> TICKETS </th>
          <th className="my__head"> LAST LOGIN </th>
          <th className="my__head"> SUBSCRIPTION </th>
          <th className="my__head"> ACTIONS </th>
        </tr>
      </thead>
    );
  }
}

class TableBody extends Component {
  render() {
    const users = this.props.users.map((row, index) => {
      return (
        <tr className={index % 2 != 0 ? "my__row" : ""}>
          <td>
            <input type="checkbox" className="form-control"></input>
          </td>
          <td>
            <div className="d-flex flex-row align-items-center">
              <div className="">
                <img src={row.avatar} alt="Profile" className="profile" />
              </div>
              <div className="px-3">
                <h6>{row.name}</h6>
              </div>
            </div>
          </td>
          <td>
            <span className="email"> {row.email} </span>
          </td>
          <td>
            <div className="d-flex flex-row align-items-center">
              <span className="tickets__icon px-1">
                <ion-icon name="pricetag-outline"></ion-icon>
              </span>
              <span className="tickets__number"> {row.tickets} </span>
            </div>
          </td>

          <td>
            <div className="d-flex flex-row align-items-center">
              <span className="time__icon px-1">
                <ion-icon name="time-outline"></ion-icon>
              </span>
              <span className="time__title"> {row.last_login} days ago </span>
            </div>
          </td>

          <td>
            <div className="d-flex flex-row align-items-center">
              <span className="active__icon px-1">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </span>
              <span className="active__title">
                {row.subscription && <span> Active </span>}
                {!row.subscription && <span> Inactive </span>}
              </span>
            </div>
          </td>

          <td>
            <div className="d-flex flex-row align-items-center">
              <span className="eye__icon px-1">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
              <div className="divider"> | </div>
              <span className="delete__icon">
                <ion-icon name="close-circle-outline"></ion-icon>
              </span>
            </div>
          </td>
        </tr>
      );
    });

    return <tbody> {users}</tbody>;
  }
}

class Table extends Component {
  render() {
    const { users } = this.props;
    return (
      <table class="table table-borderless">
        <TableHead />
        <TableBody users={users} />
      </table>
    );
  }
}

export default Table;
