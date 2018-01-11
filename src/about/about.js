import React, { Component } from 'react';
import './about.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
     //   this.getInitialState();
    }
    componentWillMount() {
        this.setState({ count: 0 });
    }
    incrementCounter=()=> {
        this.setState({ count: this.state.count + 1 });
    }
    getInitialState() {
        //this.state= { count: 0 };
        //this.setState({ count: 0 });
    }
    render() {
        return (
            <div>About Page<br/>
                <h1 className="text-blue">Hello good work {this.props.name}</h1><br/>
                <input type='button' onClick={this.incrementCounter} value='Click me' />
                <b>{this.state.count}</b>
            </div>
        )
    };
}
export default About;