import { ModalCreatUser } from "./ModalCreatUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

export const ManageUser = (props) => {
  const [showModalCreatUser, setShowModalCreatUser] = useState(false);

  return (
    <div className="manage-users-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            class="btn btn-outline-primary d-flex align-items-center gap-2"
            onClick={() => setShowModalCreatUser(true)}
          >
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-user-container">table users</div>
        <ModalCreatUser
          show={showModalCreatUser}
          setShow={setShowModalCreatUser}
        />
      </div>
    </div>
  );
};
