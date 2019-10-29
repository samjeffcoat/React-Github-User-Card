import React from "react";
import axios from "axios";
import "./App.css";
import User from './User';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'samjeffcoat',
      gitHubUser: {},
      followers: []

    };
  }
  componentDidMount() {
    axios
      .get('https://api.github.com/users/${this.state.username}')
      .then(res => {
        this.setState({
          gitHubUser: res.data
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <h1>Sam's Github</h1>
        <div className= "profile">
       <User />
      </div>
      </div>
    );
  }
}

export default App;
