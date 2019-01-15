import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class AddEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventName: '',
            eventHost: '',
            eventLocation: ''
         }
        
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        const {name, value} = e.target;
        this.setState(()=>{
            return {
                [name]: value
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        axios.post('/api/event', {...this.state})
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    this.props.history.push('/events');
                }else{
                    console.log('u suck');
                }
            })
    }

    render(){
    return(
        <form>
            <label>Event Name
            <input name="eventName" type="text" onChange={this.handleChange} value={this.state.eventName}/>
            </label>
            <label>Event Host
            <input name="eventHost" type="text" onChange={this.handleChange} value={this.state.eventHost}/>   
            </label>
            <label>Event Location
            <input name="eventLocation" type="text" onChange={this.handleChange} value={this.state.eventLocation}/>   
            </label>
            <label>Event Image Link(if any)
            <input disabled name="eventImage" type="text" onChange={this.handleChange} value={this.state.eventImage}/>   
            </label>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        
        
    )}
}

export default AddEvent;