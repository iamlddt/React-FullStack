import React from "react";

class AddUserinfor extends React.Component {


    state = {
        name: '',
        address: 'Khanh Hoa',
        age: ''
    }

    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    };

    handleOnSubmit = (event) => {
        // preventDefault ngăn không cho trang web reload
        event.preventDefault();

        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm  {this.state.age}

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnchangeInput(event)}
                    />
                    <button>Submit</button>
                </form>

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your age:</label>
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />

                </form>
            </div>
        )
    }
};


export default AddUserinfor;