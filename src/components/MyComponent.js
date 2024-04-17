import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'Trung',
        address: 'Khanh Hoa',
        age: '32'
    }

    handleOnclick = (event) => {
        console.log('>> Click my button')
        console.log('My name is ', this.state.name)

        // merge state => React class
        this.setState({
            name: 'Khue',
            age: '27'
        })
    };

    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
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
                    <input type="text"
                        onChange={(event) => this.handleOnchangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
};

export default MyComponent;