import { useEffect, useState } from "react";
import { UserList } from "./UserList/UserList";

function App() {
  const fetchUserData = () => {
    fetch("https://6436fa4b3e4d2b4a12e09fd0.mockapi.io/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div className="App">{users.length > 0 && <UserList users={users} />}</div>
  );
}

export default App;
