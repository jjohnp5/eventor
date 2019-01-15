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

    handleAddParticipant(){
        
    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get(`/api/event/${this.props.match.params.id}`)
        .then(response => {
            console.log(response);
            this.setState({...this.state, event: {...response.data}, loading: false})
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
                <p>{this.state.event.eventLocation}</p>
                <p>Menu:</p>
                <div class="event-menu">
                    { this.state.event.eventMenu.length > 0 ? this.state.event.eventMenu.map((menu,i)=>{
                        return (
                            <li key={i}>{menu}</li>
                        )
                    }) : 
                        <p>No menus yet</p>
                        
                    }
                    <button class="btn btn-primary">Add a menu</button>
                </div>
                <p>Participants:</p>
                <div class="event-participant">
                {this.state.event.eventParticipants.length > 0 ? this.state.event.eventParticipants.map((menu,i)=>{
                        return (
                            <li key={i}>{menu}</li>
                        )
                    }) : <p>No participants found</p>
                    }
                    <button class="btn btn-primary" >Add Participant</button>
                </div>
                </div>

            
            
            )}
            </div>
        );
    }
}

export default Event;