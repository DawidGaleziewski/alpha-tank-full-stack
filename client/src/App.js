import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Tank from './components/Pages/Tank';
import Login from './components/Pages/Login';
import TanksHome from './components/Pages/TanksHome';
import About from './components/Pages/About';


function App() {
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
  }

  const [userAuthState, setUserAuthState] = useState(null);

  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={() => <Login setUserAuth={setUserAuthStateHandler} />} 
        />
        <Route path="/tanks" exact render={() => <TanksHome setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} />} />
        <Route path="/tanks/:tankID" exact component={Tank}/>
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
