import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    let { name, 
          avatar_url, 
          bio, 
          email, 
          follower, 
          following,
          html_url, 
          location,
          public_gists, 
          public_repos 
        } = this.props.data;
    return (
      <div>
        <h2>{name}</h2>
        <img src={avatar_url} alt={name}/><br/>
        <i>{bio}</i><br/>
        <u>{email}</u><br/>
        <i>{follower}</i><br/>
        <i>{following}</i><br/>
        <i>{html_url}</i><br/>
        <i>{location}</i><br/>
        <i>{public_gists}</i><br/>
        <i>{public_repos}</i>
      </div>
    );
  }
}

BasicInfo.PropType = {
  data: React.PropTypes.object.isRequired
}

export default BasicInfo;