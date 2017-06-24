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
                    <li style={{float:'right', flex:'7'}}><a href="https://github.com/hashiramen/BlackSurvival-react-redux-router" style={{float:'right', padding: '0px', fontSize: '1.7em', marginRight:'.7em'}} target="__blank"><span className="fa fa-github"></span></a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;