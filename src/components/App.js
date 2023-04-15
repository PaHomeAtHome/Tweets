import { Container } from "./Container/Container";
import { useEffect, useState } from "react";
import { UserList } from "./UserList/UserList";
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton";
import { Loader } from "./Loader/Loader";
const apiUrl = "https://6436fa4b3e4d2b4a12e09fd0.mockapi.io/api/users";

function App() {
  const limit = 9;

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl + `?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      const data = await response.json();
      !users
        ? setUsers(data)
        : setUsers((prevState) => [...prevState, ...data]);
      setPage(page + 1);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id) => {
    try {
      const response = await fetch(apiUrl + `/${id}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      const data = await response.json();
      const usersCopy = [...users];
      const index = users.findIndex((user) => user.id === id);
      usersCopy[index] = data;
      setUsers(usersCopy);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getUserCount = async () => {
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
      const data = await response.json();
      setUserCount(data.length);
    } catch (err) {
      console.log(err);
      setUserCount(null);
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
        updateUser(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [UserCount, setUserCount] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUserData();
    getUserCount();
  }, []);

  return (
    <Container>
      {!error && users && (
        <UserList users={users} changeFollowing={changeFollowing} />
      )}
      {error && <p>{error}</p>}
      {!loading && Math.ceil(UserCount / limit) >= page && (
        <LoadMoreButton onClick={() => fetchUserData()}>
          Load more
        </LoadMoreButton>
      )}
      {loading && <Loader />}
    </Container>
  );
}

export default App;
