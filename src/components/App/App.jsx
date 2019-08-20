import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';
import MoreDetails from '../MoreDetails/MoreDetails';

class App extends Component {
  state = {
    studentList: [],
    selectedStudent: {}
  };

  componentDidMount() {
    this.getStudents();
  }

  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
    axios.post('/students', newStudent)
      .then(response => {
        console.log(response);
        this.getStudents();
      })
      .catch(error => {
        console.log(error)

      })
  }

  getMoreDetails = (student) => {
    console.log('clicked gmd', student);
    // https://api.github.com/users/GITHUB_USERNAME?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4
    axios.get(`https://api.github.com/users/${student.github_name}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`)
      .then(response => {
        console.log(response.data);
        this.setState({
          selectedStudent: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getStudents = () => {
    axios.get('/students')
      .then(response => {
        console.log(response);
        this.setState({
          studentList: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>

          </header>
          <br />
          {/* <Home /> */}
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* <StudentForm addStudent={this.addStudent} />
          <StudentList getMoreDetails={this.getMoreDetails} studentList={this.state.studentList} />
          <MoreDetails selectedStudent={this.state.selectedStudent} /> */}
          {/* <p>{JSON.stringify(this.state.studentList)}</p> */}
        </div>
      </Router>
    );
  }
}

export default App;
