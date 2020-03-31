import React from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import PropTypes from "prop-types";

const users = [
  {
    name: "Sarah Lambert",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    status: true
  },
  {
    name: "Rachel Alexander",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    status: false
  },
  {
    name: "Marion Simmons",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    status: true
  }
];

const users2 = [
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

function App() {
  return (
    <div className="App">
      {users.map(function(user) {
        return <Contact {...user} />;
      })}
      ;
    {users2.map(function(user) {
      return <ContactList {...user} />;
    })}
    ;
  </div>
  );
}

Contact.propTypes = {
  userName: PropTypes.string.isRequired,
  userStatus: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired
};
export default App;
