import React, {Component} from 'react';




class User extends Component{
    render(){
        return (
            <div className= "Card">
                Sam's Github
               <div> image:{this.props.avatar_url} username: {this.props.login}name: {this.props.name}</div>
            </div>)
        
    }
}

export default User;