import React, { useState } from "react";

// class AddUserinfor extends React.Component {


// state = {
//     name: '',
//     address: 'Khanh Hoa',
//     age: ''
// }

// handleOnchangeInput = (event) => {
//     this.setState({
//         name: event.target.value
//     })
// };

// handleOnchangeAge = (event) => {
//     this.setState({
//         age: event.target.value
//     })
// };

// handleOnSubmit = (event) => {
//     // preventDefault ngăn không cho trang web reload
//     event.preventDefault();

//     this.props.handleAddNewUser({
//         id: Math.floor((Math.random() * 100) + 1) + '-random',
//         name: this.state.name,
//         age: this.state.age
//     });
// };

//     render() {
//         return (
// <div>
//     My name is {this.state.name} and I'm  {this.state.age}

//     <form onSubmit={(event) => this.handleOnSubmit(event)}>
//         <label>Your name:</label>
//         <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => this.handleOnchangeInput(event)}
//         />
//         <button>Submit</button>
//     </form>

//     <form onSubmit={(event) => this.handleOnSubmit(event)}>
//         <label>Your age:</label>
//         <input
//             type="text"
//             value={this.state.age}
//             onChange={(event) => this.handleOnchangeAge(event)}
//         />

//     </form>
// </div>
//         )
//     }
// };

const AddUserinfor = (props) => {

    // state = {
    //     name: '',
    //     address: 'Khanh Hoa',
    //     age: ''
    // };
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Khanh Hoa');
    const [age, setAge] = useState('');

    const handleOnchangeInput = (event) => {
        setName(event.target.value)
        // this.setState({
        //     name: event.target.value
        // })
    };

    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
        // this.setState({
        //     age: event.target.value
        // })
    };

    const handleOnSubmit = (event) => {
        // preventDefault ngăn không cho trang web reload
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    };
    return (
        <div>
            My name is {name} and I'm  {age}

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => handleOnchangeInput(event)}
                />
                <button>Submit</button>
            </form>

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your age:</label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => handleOnchangeAge(event)}
                />

            </form>
        </div>
    )
}


export default AddUserinfor;