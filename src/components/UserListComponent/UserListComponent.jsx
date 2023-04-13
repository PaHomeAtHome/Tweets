export const UserListComponent = ({ user }) => {
  const { tweets, followers, avatar, id } = user;
  return (
    <li key={id}>
      {tweets}
      {followers}
      <img src={avatar} alt={`${user.user} avatar`} />
    </li>
  );
};
