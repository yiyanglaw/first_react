import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Clinic Information System</h1>
      <form action="/" method="POST" encType="multipart/form-data">
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" required />
        </div>
        <div>
          <label>Upload File:</label>
          <input type="file" name="file" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/view_data">View Stored Data</Link>
    </div>
  );
}

export default HomePage;
