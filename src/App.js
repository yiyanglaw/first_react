import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import PatientForm from './components/PatientForm';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PatientForm />} />
          <Route path="/view-ages" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
