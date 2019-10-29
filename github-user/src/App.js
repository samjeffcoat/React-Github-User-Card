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


      axios
      .get("https://api.github.com/users/samjeffcoat/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log("my data", this.state.followers)
      })
      .catch(err => console.log(err))
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
