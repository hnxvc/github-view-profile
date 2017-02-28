import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleSearch(e) {
    let userName = this.userName.value;
    this.props.handleSearch(userName);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input 
          ref={(input) => { this.userName = input; }}
          type="text" 
          placeholder="Enter..."/>
      </form>
    );
  }
}

export default Search;