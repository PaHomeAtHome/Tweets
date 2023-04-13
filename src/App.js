import { useEffect, useState } from "react";

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
    <div className="App">
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.user}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
