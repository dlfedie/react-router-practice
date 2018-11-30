import React, { Component } from 'react';

class MoreDetails extends Component {
  render() {
    let content;
    if(this.props.selectedStudent.avatar_url) {
      content = <img alt="picture" src={this.props.selectedStudent.avatar_url} />

    } else {
      content = <p>Select a Person</p>
    }

    return (
      <div>
        {content}
      </div>
      // <h2>{JSON.stringify(this.props.selectedStudent)}</h2>
    )
  }
}

export default MoreDetails;

