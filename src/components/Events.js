import React, {Component} from 'react';
import axios from 'axios';

class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            loading: false,
            eventCount: 0
        }
    }

    componentDidMount(){
        this.setState({loading: true});
        axios.get(`/api/event`)
        .then(response => {
            this.setState({...this.state, events: [...response.data], loading: false, eventCount: response.data.length})
        })
        .catch(err => {
            this.setState({loading:false})
        })
    }

    render(){
        return (
            <div>
                
                {
                this.state.loading ? (<h1>Loading... </h1>) :  
                    this.state.eventCount > 0 ?                      
                        this.state.events.map((ev, i )=>{
                            return (
                            <div key={i}>
                                <img src={ev.eventImage} alt="profile" />
                                <a href={`/events/${ev._id}`}><h1>{ev.eventName}</h1></a>
                                <p>{ev.eventHost}</p>
                                <p>{ev.eventLocation}</p>
                            </div>)
                        }) : (<h1>No Events found</h1>)
                }           
                    
            </div>
           )  
    }
}

export default Events;