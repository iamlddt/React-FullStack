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
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={(event) => { this.handleOnclick(event) }}>Click me</button>
            </div>
        )
    }
};

export default MyComponent;