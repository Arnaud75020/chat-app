import React from "react";
import "./Contact.css";

const Contact = props => (
  <div className="Contact">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <div>
      <h4 className="name">{props.name}</h4>
      <p className="status">
        <span className={props.status ? "status-online" : "status-offline"} />
        {props.status ? "online" : "offline"}
      </p>
    </div>
  </div>
);

export default Contact;
