import React from "react";
import "./Contact.css";

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

  
  const ContactList = props => (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <h4 className="name">{props.name}</h4>
        <p className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          {props.status ? "online" : "offline"}
        </p>
      </div>
    </div>
  );
  
  export default ContactList;