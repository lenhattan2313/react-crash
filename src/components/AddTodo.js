import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({title: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" 
                placeholder="Add todo ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type="submit"/>
            </form>
        )
    }
}

export default AddTodo
