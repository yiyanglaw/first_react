import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://ffire-kskb.onrender.com/view_ages');
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="title">View Ages</h1>
      <ul>
        {Object.entries(users).map(([name, details]) => (
          <li key={name}>
            {name} - Age: {details.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
