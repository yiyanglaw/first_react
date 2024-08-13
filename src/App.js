import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import PatientForm from './components/PatientForm';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={PatientForm} />
          <Route path="/view-ages" component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
