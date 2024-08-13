import React, { useState } from 'react';
import axios from 'axios';

function PatientForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('file', file);

    try {
      const response = await axios.post('https://ffire-kskb.onrender.com', formData);
      alert(response.data.message);
      setName('');
      setAge('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Clinic Information System</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter patient name"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter patient age"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Patient Image</label>
          <div className="control">
            <input
              className="input"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
        </div>

        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PatientForm;
