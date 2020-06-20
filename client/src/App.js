import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import Tank from './components/Pages/Tank';
import Login from './components/Pages/Login';
import TanksHome from './components/Pages/TanksHome';
import About from './components/Pages/About';
import getBearerToken from './utils/getBearerToken';
import axios from 'axios';


function App() {

  const [userAuthState, setUserAuthState] = useState(null);
  // started working on user log in state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
  }
  useEffect(()=> {
    if(!isUserLoggedIn){
      const bearerToken = getBearerToken(userAuthState);
      axios.get('/users/me', bearerToken).then(res => {
        const token = bearerToken.headers.Authorization.replace('Bearer ', '');
        setUserAuthState({...res.data, token});
        setIsUserLoggedIn(true)
      })
    }
  }, [isUserLoggedIn])


  return (
    <div className="App">
        <Router>
          <MainContainer>
            <Route path="/" exact render={() => <Login setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>} 
            />
            <Route path="/tanks" exact render={() => <TanksHome setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} isUserLoggedIn={isUserLoggedIn} />} />
            <Route path="/tanks/:tankID" exact component={Tank}/>
            <Route path="/about" component={About} />
          </MainContainer>
        </Router>
    </div>
  );
}

export default App;
