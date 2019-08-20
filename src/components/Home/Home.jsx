import React, { Component } from 'react';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';
import MoreDetails from '../MoreDetails/MoreDetails';

class Home extends Component {
    render() {
        return (
            <div>
                <StudentForm addStudent={this.addStudent} />
                <StudentList getMoreDetails={this.getMoreDetails} studentList={this.state.studentList} />
                <MoreDetails selectedStudent={this.state.selectedStudent} />
            </div>
        )
    }
}

export default Home;