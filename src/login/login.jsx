import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.getInitialState();
    }
    componentWillMount() {
        this.setState({
            messageCount: 34
        });
    }
    getInitialState=()=> {
        //this.state = { messageCount: 45 };
        //return { messageCount: 34 };
        //this.setState({
        //    messageCount: 34
        //});
    };
    messagCountChange = () => {
        this.setState({ messageCount: this.state.messageCount + 1 });
    };
    render() {
        return (
            <div>Login Page <br/>
                <h1>Good work keep it up {this.state.messageCount}</h1>
                <input type='button' onClick={this.messagCountChange} value='Increment Messages' />
            </div>
        );
    }
}