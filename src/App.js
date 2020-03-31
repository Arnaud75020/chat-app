import React from "react";
import Contact from "./components/Contact";
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

function App() {
  return (
    <div className="App">
      {users.map(function(user) {
        return <Contact {...user} />;
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
