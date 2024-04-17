import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Trung', age: '32' },
            { id: 2, name: 'Khue', age: '27' },
            { id: 3, name: 'Kem ', age: '5' },
            { id: 4, name: 'abc ', age: '100' }
        ]
    }

    render() {
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        )
    }
};

export default MyComponent;