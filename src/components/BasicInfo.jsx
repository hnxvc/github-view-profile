import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    let { name, 
          avatar_url, 
          bio, 
          email, 
          followers, 
          following,
          html_url, 
          location,
          public_gists, 
          public_repos 
        } = this.props.data;
    return (
      <div className="BasicInfo clearfix">
        <a href={html_url} target="_blank">
          <img src={avatar_url} alt={name} className="BasicInfo__avatar"/>
        </a> 
        <div className="BasicInfo--right">
          <span className="BasicInfo__tag">{followers} Followers</span>
          <span className="BasicInfo__tag">{following} Following</span>
          <span className="BasicInfo__tag">{public_gists} Public gists</span>
          <span className="BasicInfo__tag">{public_repos} Public repos</span>

          <h2 className="BasicInfo__name"><a href={html_url} target="_blank">{name}</a></h2>
          <span className="BasicInfo__text"><strong>Bio:</strong> {bio}</span>
          <span className="BasicInfo__text"><strong>Email:</strong> <u>{email}</u></span>
          <span className="BasicInfo__text"><strong>Location:</strong> {location}</span>
          
        </div>
        
      </div>
    );
  }
}

BasicInfo.PropType = {
  data: React.PropTypes.object.isRequired
}

export default BasicInfo;