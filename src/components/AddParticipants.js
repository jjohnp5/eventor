import React, {Component} from 'react';
import axios from 'axios';


class AddParticipants extends Component {

    constructor(props){
        super(props)
        this.state = {
            participants: [],
            loading: false
        }
    }
    componentDidMount(){
        this.setState({loading: true})
        axios.get('/api/guest')
            .then(data=>{
                if(data.data){
                    this.setState({participants:[...data.data], loading: false})
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }

    render(){
        return(
            <div>
                {this.state.participants.length > 0 ? 
                    (
                        <div style={{marginTop: '50px'}}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-success">Add</button>
                                </div>
                                <input list="participants" className="form-control" />
                                <datalist id="participants">
                                {this.state.participants.map((p, i)=>{
                                    return <option key={i}>{p.guestName}</option>
                                })}
                                </datalist>
                                
                            </div>
                            <button className="btn btn-secondary">New Participant</button>
                        </div>
                    ) :
                    (
                        <div>
                        <p>No Participants to choose from.</p>
                        <button className="btn btn-info">Add New Participant</button>
                        </div>
                    )
                
                }
            </div>
        )
    }
}

export default AddParticipants