import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Event from './components/Event'
import Home from './components/Home'
import Nav from './components/Navigator'
import Events from './components/Events'
import AddEvent from './components/AddEvent'
import Whoops404 from './components/Whoops404'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventHost: '',
      eventLocation: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ eventName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`/api/event`)
      .then(response => this.setState({...response.data[0]}));
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Nav} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" exact component={Events} />
            <Route path="/events/add" component={AddEvent} />
            <Route path="/events/:id" component={Event} />
            <Route component={Whoops404} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
