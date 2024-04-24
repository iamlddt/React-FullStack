import { ModalCreatUser } from "./ModalCreatUser";
import "./ManageUser.scss";

export const ManageUser = (props) => {
  return (
    <div className="manage-users-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
        <ModalCreatUser />
      </div>
    </div>
  );
};
