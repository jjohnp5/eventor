import React, {Component} from 'react';


class Nav extends Component {
    render(){
        return(
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/events">Events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/guests">Guests</a>
                </li>
                
            </ul>
        )
    }
}

export default Nav;