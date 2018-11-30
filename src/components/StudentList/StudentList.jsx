import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    console.log(this.props.studentList);

    let tableRows = this.props.studentList.map( student => {
      return (
        <tr key={student.id} >
          <td>{student.github_name}</td>
          <td><button onClick={() => this.props.getMoreDetails(student)}>GET MORE INFO</button></td>
        </tr>
      )
    })
    return (
      <div>
        <h1>STUDENT LIST</h1>
        <table>
          <thead >
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentList;