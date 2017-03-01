import React, { Component } from 'react';

class Repositories extends Component {
  render() {
    let list_repo = (this.props.data !== '') ?
      this.props.data.map((repo) => {
        return <li className="ListRepo__item" key={repo.id}>
          <strong><a href={repo.html_url} target="_blank">{repo.name}:</a></strong> <i>{repo.description}</i>
        </li>
      })
    :
      null 
    ;

    return (
      <ul className="ListRepo">
        {list_repo}
      </ul>
    );
  }
}

Repositories.defaultProps = {
  data: []
}

Repositories.propTypes = {
  data: React.PropTypes.array
}

export default Repositories;