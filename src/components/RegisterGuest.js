import React, {Component} from 'react'
import axios from 'axios';


class RegisterGuest extends Component {
    constructor(props){
        super(props)
        this.state = {
            guestName: '',
            guestEmail: '',
            guestPasscode: ''
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
        axios.post('/api/guest', {...this.state})
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
            <label>Guest Name
            <input name="guestName" type="text" onChange={this.handleChange} value={this.state.guestName}/>
            </label>
            <label>Guest Email
            <input name="guestEmail" type="text" onChange={this.handleChange} value={this.state.guestEmail}/>   
            </label>
            <label>Personal Passcode
            <input name="guestPasscode" type="number" onChange={this.handleChange} value={this.state.guestPasscode}/>   
            </label>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        )
    }
}

export default RegisterGuest;