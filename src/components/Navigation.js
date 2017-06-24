import React, { Component } from 'react';
import { Link } from 'react-router'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/characters">Characters</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/build">Complete!</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;