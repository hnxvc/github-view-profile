import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

import Search from './components/Search.jsx';
import BasicInfo from './components/BasicInfo.jsx';
import Repositories from './components/Repositories.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      userName: 'hoanguyenf12',
      userData: {},
      userRepos: [],
      loading: false,
      notFound: false
    });

    this.getUserData  = this.getUserData.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  getUserData() {
    let url = `https://api.github.com/users/${this.state.userName}?client_id=${this.props.clientID}&client_secret=${this.props.clientSecret}`;

    fetch(url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res
      } else {
        var error = new Error(res.statusText)
        error.res = res
        throw error;
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        userData: data,
        loading: false
      });

    })
    .catch(err => {
      this.setState({
        loading: false,
        notFound:  true
      });
    })
  }

  getUserRepos() {
    let url = 
      `https://api.github.com/users/${this.state.userName}/repos?client_id=${this.props.clientID}&client_secret=${this.props.clientSecret}`;

    fetch(url)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res
      } else {
        var error = new Error(res.statusText)
        error.res = res
        throw error;
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        userRepos: data,
        notFound: false
      });
    })
    .catch(err => {
    })
  }

  handleSearch(userName) {
    this.setState({
      userName: userName,
      loading: true
    },function() {
      this.getUserData();
      this.getUserRepos();
    });
  }
  
  componentWillMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    let displayGithubProfile = (this.state.notFound) ?
      <b>User not found</b>
    :
      <div>
        <BasicInfo data={this.state.userData} />
        <h3>Repositories</h3>
        <Repositories data={this.state.userRepos} />
      </div>
    ;
    return (
      <div className="App">
        <Search  handleSearch={this.handleSearch}/>
        {
          this.state.loading &&
          <i>Searching ....</i>
        }
        { displayGithubProfile }
        
      </div>
    );
  }
}

App.defaultProps = {
  clientID: 'd2fdfd698fcf84c139f8',
  clientSecret: 'de3407233f55a393e986227f44104a3a7ef33754'
}

export default App;
