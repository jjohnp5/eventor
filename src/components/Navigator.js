import React, {Component} from 'react';


class Nav extends Component {
    render(){
        return(
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/events">Events</a>
                </li>
            </ul>
        )
    }
}

export default Nav;