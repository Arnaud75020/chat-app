import React, {Component} from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    online: props.online
    };
  }
  render() {
    return (
  <div className="Contact">
    <img className="avatar" src={this.props.avatar} alt={this.props.name} />
    <div className="status"        
        onClick={event => {
        const newStatus = !this.state.online ;
        this.setState({ online: newStatus });
      }}>
      <h4 className="name">{this.props.name}</h4>
      <p className="satus-text">
        <span className={this.state.online ? "status-online" : "status-offline"} />
        {this.state.online ? "online" : "offline"}
      </p>
    </div>
  </div>
  )
}
}

export default Contact;
