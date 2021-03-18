import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
            <div className="card container h-100 w-100" >
            <div className="card-body">
              <h5 className="card-title"> Email On :</h5>
              <text>ftkadir@gmail.com</text>
            </div>
            </div>
            <div className="card container h-100 w-100" >
            <div className="card-body">
              <h5 className="card-title"> Cell :</h5>
              <text>+880171519961</text>
            </div>
            </div>
            </div>
        );
    }
}

export default Contacts;