import { UserListComponent } from "../UserListComponent/UserListComponent";

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserListComponent key={user.id} user={user} />
      ))}
    </ul>
  );
};
