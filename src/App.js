import React from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import PropTypes from "prop-types";

const users = [
  {
    id: 1,
    name: "Sarah Lambert",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: true
  },
  {
    id: 2,
    name: "Rachel Alexander",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    online: false
  },
  {
    id: 3,
    name: "Marion Simmons",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
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
      <ContactList />
    </div>
  );
}

Contact.propTypes = {
  userName: PropTypes.string.isRequired,
  userStatus: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired
};

ContactList.propTypes = {
  userName: PropTypes.string.isRequired,
  userOnline: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired
};
export default App;