import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import Tank from './components/Pages/Tank';
import Login from './components/Pages/Login';
import TanksHome from './components/Pages/TanksHome';
import About from './components/Pages/About';


function App() {

  const [userAuthState, setUserAuthState] = useState(null);
  // started working on user log in state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
  }

  return (
    <div className="App">
        <Router>
          <MainContainer>
            <Route path="/" exact render={() => <Login setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} />} 
            />
            <Route path="/tanks" exact render={() => <TanksHome setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} />} />
            <Route path="/tanks/:tankID" exact component={Tank}/>
            <Route path="/about" component={About} />
          </MainContainer>
        </Router>
    </div>
  );
}

export default App;
