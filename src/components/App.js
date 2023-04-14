import { useEffect, useState } from "react";
import { UserList } from "./UserList/UserList";
const apiUrl = "https://6436fa4b3e4d2b4a12e09fd0.mockapi.io/api/users";

function App() {
  const fetchUserData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setUsers(null);
    } finally {
      setLoading(false);
    }
  };

  const changeFollowing = (isFollowing, id, followers) => {
    fetch(apiUrl + `/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        isFollowing: !isFollowing,
        followers: !isFollowing ? followers + 1 : followers - 1,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      })
      .then(() => {
        fetchUserData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="App">
      {loading && <p>Loading</p>}
      {!loading && !error && (
        <UserList users={users} changeFollowing={changeFollowing} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
