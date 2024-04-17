import React, { useState } from "react";
import './Displayinfor.scss';
import logo from './../logo.svg';

// class DisplayInfor extends React.Component {

//     state = {
//         isShowListUsers: true
//     };

//     handleShowHide = (event) => {
//         this.setState({
//             isShowListUsers: !this.state.isShowListUsers
//         })
//     };

//     render() {
//         const { listUsers } = this.props;
//         console.log(listUsers)

//         return (
//             <div className="display-infor-container">
//                 {/* <img src={logo} alt="logo" /> */}
//                 <div>
//                     <button
//                         onClick={(event) => { this.handleShowHide(event) }}>
//                         {this.state.isShowListUsers === true ? 'Hide listUsers' : 'Show listUsers'}
//                     </button>
//                 </div>

//                 {this.state.isShowListUsers &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>

//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUsers, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUsers)
    }

    return (
        <div className="display-infor-container">

            <div>
                <button onClick={() => handleShowHideListUser()}>
                    {isShowHideListUsers === true ? "Hide list user" : "Show list user"}
                </button>
            </div>

            {isShowHideListUsers &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}




export default DisplayInfor;