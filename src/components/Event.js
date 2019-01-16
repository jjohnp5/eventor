import React, {Component} from 'react';
import axios from 'axios';

class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: {
            },
            loading: false
        }
        this.handleAddParticipant = this.handleAddParticipant.bind(this);
    }

    handleAddParticipant(){
        this.props.history.push(`/events/${this.state.event._id}/add/participants`)
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
                <div className="event-menu">
                    { this.state.event.eventMenu ? this.state.event.eventMenu.map((menu,i)=>{
                        return (
                            <li key={i}>{menu}</li>
                        )
                    }) : 
                        <p>No menus yet</p>
                        
                    }
                    
                    <button className="btn btn-primary">Add a menu</button>
                </div>
                <p>Participants:</p>
                <div className="event-participant">
                {this.state.event.eventParticipants ? this.state.event.eventParticipants.map((menu,i)=>{
                        return (
                            <li key={i}>{menu}</li>
                        )
                    }) : <p>No participants found</p>
                    }
                    <button className="btn btn-primary" onClick={this.handleAddParticipant}>Add Participant</button>
                </div>
                </div>

            
            
            )}
            </div>
        );
    }
}

export default Event;