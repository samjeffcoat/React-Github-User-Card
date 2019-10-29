import React from 'react';


class Followers extends React.Component{
    render(){
        return(
            <div className= "Follow">
                <h3>Sam's Followers</h3>
                <div className ="follower-container">
                    {this.props.follower.map(follower => {
                        <div key = {follower.id} className= "follow-card">
                            <img className= "avatar" src = {follower.avatar_url} alt= "follower avatar"></img>
                            <h2 className ="usernames">Username: {follower.login}</h2>
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default Followers;