import React, {Component} from 'react';
import axios from 'axios';

class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: {
            eventName: 'Test',
            eventHost: 'TT',
            eventLocation: 'Ttt ttt',
            eventImage: '',
            eventParticipants: [],
            eventMenu: []
            },
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get(`/api/event`)
        .then(response => {
            this.setState({...this.state, event: {...response.data[0]}, loading: false})
        })
    }

    render(){
        return (
            <div>
                {this.state.loading ? (<h1>Loading... </h1>) :
            (
            
            <div>
                <img src={this.state.event.eventImage} alt="profile" />
                <h1>{this.state.event.eventName}</h1>
            <p>{this.state.event.eventHost}</p>
            <p>{this.state.event.eventLocation}</p></div>)}
            </div>
        );
    }
}

export default Event;