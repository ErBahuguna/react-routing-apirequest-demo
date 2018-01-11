import React, { Component } from 'react';
import  './contact.css';

class Contact extends Component {
    //constructor(props) {
    //    super(props);
    //}
    render() {
        return (
            <div>Contact Page <br/>
                <h1 class='goyal'>Hi {this.props.name}, Please contact me here</h1>
            </div>
        )
    };
};
export default Contact;