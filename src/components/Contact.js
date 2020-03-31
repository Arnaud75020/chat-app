import React, { Component } from "react";
import './style.css';

class Contact extends Component {
  render() {
    const name = "Joy Patterson";
    const avatar = "https://randomuser.me/api/portraits/women/24.jpg";
    const status = true;

    return (
      <div className="Contact">
        <img className="avatar" src={avatar} alt={name} />
        <div>
          <h4 className="name">{name}</h4>
          <p className="status"><span className="status-online"></span>{status ? "online" : "offline"}</p>
        </div>
      </div>
    );
  }
}

export default Contact;