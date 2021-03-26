import React, { Component } from "react";
import Table from "./Table";
import Header from "./header/Header";
import SubHeader from "./subheader/SubHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./assets/profile.jpg";

class App extends Component {
  render() {
    const users = [
      {
        name: "ifeanyi Anuebunwa",
        email: "ify@gmail.com",
        tickets: 3,
        last_login: 15,
        subscription: true,
        avatar: Profile,
      },

      {
        name: "Adms",
        email: "adms@gmail.com",
        tickets: 2,
        last_login: 14,
        subscription: false,
        avatar: Profile,
      },

      {
        name: "Mazi",
        email: "Mazi@gmail.com",
        tickets: 1,
        last_login: 19,
        subscription: true,
        avatar: Profile,
      },
    ];
    return (
      <div className="container">
        <Header />
        <SubHeader />
        <Table users={users} />
      </div>
    );
  }
}

export default App;
