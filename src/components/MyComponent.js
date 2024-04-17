import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Trung', age: '32' },
            { id: 2, name: 'Khue', age: '27' },
            { id: 3, name: 'Kem ', age: '5' },
            { id: 4, name: 'abc ', age: '100' }
        ]
    };

    handleAddNewUser = (userObj) => {
        console.log('check data from parent ', userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    };

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    };

    render() {
        return (
            <div>
                <AddUserinfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div>
        )
    }
};

export default MyComponent;