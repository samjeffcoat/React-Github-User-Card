import React from "react";
import axios from "axios";
import "./App.css";

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
        {
        this.state.persons.map(person =><h1 key= {person.id}>{person.name}</h1>)
      }
      </div>
      </div>
    );
  }
}

export default App;
