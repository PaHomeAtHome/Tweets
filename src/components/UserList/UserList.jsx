import { UserListComponent } from "../UserListComponent/UserListComponent";

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((userInfo) => (
        <UserListComponent key={userInfo.id} userInfo={userInfo} />
      ))}
    </ul>
  );
};
