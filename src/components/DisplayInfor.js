import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUsers: true
    };

    handleShowHide = (event) => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    };

    render() {
        const { listUsers } = this.props;
        console.log(listUsers)

        return (
            <div>

                <div>
                    <button
                        onClick={(event) => { this.handleShowHide(event) }}>
                        {this.state.isShowListUsers === true ? 'Hide listUsers' : 'Show listUsers'}
                    </button>
                </div>

                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;