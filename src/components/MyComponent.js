import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {



    render() {
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name='Kem' age='5' />
            </div>
        )
    }
};

export default MyComponent;