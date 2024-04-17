import React from "react";

class UserInfor extends React.Component {


    state = {
        name: 'Trung',
        address: 'Khanh Hoa',
        age: '32'
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
        console.log(this.state)
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};


export default UserInfor;