import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Student {
    constructor(github = '') {
        this.github_name = github;
    }
};

class StudentForm extends Component {
    state = new Student();

    // Called when the input field changes
    handleChange = (event) => {
        this.setState(new Student(event.target.value));
    }

    // Called when the submit button is pressed
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
        this.clearStudentFields();

    }
    // Clear fields of the form by reseting the user
    clearStudentFields = () => {
        this.setState(new Student());
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder="GitHub username" value={this.state.github} name="github" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// This will tell the parent component what functions it must implement to 
// use this component.
StudentForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
};

export default StudentForm;