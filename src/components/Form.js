import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        };
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with state:', this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name </label>
                    <input 
                        type='text'
                        value={this.state.username}
                        onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label>Comment </label>
                    <input 
                        type='text'
                        value={this.state.comment}
                        onChange={this.handleCommentChange}
                    />  
                </div>
                <div>
                    <label>Options </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="javascript">JavaScript</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
