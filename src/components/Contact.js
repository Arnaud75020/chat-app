import React, { Component } from 'react'

const name = 'Joy Patterson';
const avatar = 'https://randomuser.me/api/portraits/women/24.jpg';
const status = true;

class Conctact extends Component {
  render() {
  return <div className="Contact">
            <img className ='avatar' src={avatar} alt=''/>
            <div>
                <h4 className='name' >{name}</h4>
                <p className='status-online'>{status ? 'green' : 'red'}</p>
            </div>
     </div>
  }
}

export default Conctact;