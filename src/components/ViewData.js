import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://ffire-kskb.onrender.com/view_data';

function ViewData() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Stored Data</h2>
      <ul>
        {Object.entries(users).map(([name, details]) => (
          <li key={name}>
            Name: {name}, Age: {details.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewData;
