import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css';
//import logo from '../logo.svg';

/**
 * Import all page components here
 */

export default class Header extends Component {
    render() {
        return (
            <header className="App-header" >
                <h1 className="App-title">Welcome to React</h1>
                App Header Page <br />
                <nav>
                    <ul className='menu'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contac</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/user'>Users</Link></li>
                    </ul>`
                </nav>
                <br />
                <br />
                <br />
                <br />
            </header >
        )
    }
}