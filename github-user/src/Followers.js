import React, {Component} from 'react';


class Followers extends Component {
    render(){
        return(
            <div>
                <h3>Sam's Followers</h3>
                    {this.props.followers.map((follower, index)=> {
                        return <div className= 'Friend' key= {index}>
                            <img className= "avatar" src = {follower.avatar_url} alt= "follower avatar"></img>
                            <h2 className ="usernames">Username: {follower.login}</h2>
                            </div>
                    })}
            </div >
        )
    }
}
export default Followers;