import React from "react";
import axios from "axios";
import "./App.css";
import User from './User';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []

    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/samjeffcoat")
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <h1>Sam's Github</h1>
        <div className= "profile">
       <User {...this.state.user}  />
      </div>
      </div>
    );
  }
}

export default App;
