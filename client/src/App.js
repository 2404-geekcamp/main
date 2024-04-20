import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const url = "/users";
      try {
        const response = await axios.get(url);
        setUsers(response.data);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div classname="App">
      <h1>Users</h1>
      {users.map((user,index) =>
        <div key={index}>{user.name}</div>
      )}
    </div>
  );
}

export default App;