import React, {Component} from 'react'


class Guests extends Component {

    constructor(props){
        super(props)
        
        this.handleAddGuest = this.handleAddGuest.bind(this);
    }
    handleAddGuest(e){
        this.props.history.push("/guests/register");
    }
    render(){
        return(
            <div>
            <h1>Test success!</h1>
            <button onClick={this.handleAddGuest}>Add Guest</button>
            </div>
        )
    }
}

export default Guests;