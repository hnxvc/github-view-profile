import React, { Component } from 'react';

class Repositories extends Component {
  render() {
    let list_repo = (this.props.data !== '') ?
      this.props.data.map((repo) => {
        return <li key={repo.id}>name: {repo.name} -- {repo.description} -- {repo.homepage} -- {repo.html_url}</li>
      })
    :
      null 
    ;

    return (
      <div>
        {list_repo}
      </div>
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