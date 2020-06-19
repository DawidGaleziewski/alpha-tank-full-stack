import React, {useState} from 'react';

import AddTankForm from './components/Forms/AddTankForm';
import TankListing from './components/Listings/TanksListing';
import Tank from './components/Pages/Tank';
import Login from './components/Pages/Login';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
  }

  const [userAuthState, setUserAuthState] = useState(null);

  return (
    <div className="App">
      <Router>
        <Route path="/"  render={(setUserAuthStateHandler) => <Login setUserAuthStateHandler />} 
        />
      </Router>
      <AddTankForm setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} />
      <TankListing userAuthState={userAuthState} />
      <Tank userAuthState={userAuthState} tankID={"5eea8a4dfa239327948434aa"}  />
    </div>
  );
}

export default App;
