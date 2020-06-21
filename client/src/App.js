import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import Tank from './components/Pages/Tank';
import Login from './components/Pages/Login';
import TanksHome from './components/Pages/TanksHome';
import UserProfile from './components/Pages/UserProfile';
import About from './components/Pages/About';
import { getUserToken, formatAuthorizationHeader, formatBearerToken} from './utils/tokenUtils';
import {pipe} from './utils/generalUtils';
import axios from 'axios';



function App() {
  const [tokenState, setTokenState] = useState(null);
  const [userAccountInfo, setUserAccountInfo] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const loginOnMount = async (isUserLoggedIn, tokenState) => {
    if(!isUserLoggedIn){
      const token = getUserToken(tokenState);
      const authHeader = pipe( formatBearerToken, formatAuthorizationHeader)(token);
      try{
        const {data} = await axios.get('/users/me', {headers: authHeader});
        setTokenState(token);
        setIsUserLoggedIn(true);
        setUserAccountInfo(data)
        // console.log('user info:', data)
      } catch(error){
        console.log(error)
      }
    }
  }

  useEffect( ()=> {
    loginOnMount(isUserLoggedIn, tokenState)
  }, [isUserLoggedIn])


  return (
    <div className="App">
        <Router>
          <MainContainer>
            <Route path="/" exact render={() => <Login isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} tokenState={tokenState} setTokenState={setTokenState}/>} 
            />
            <Route path="/tanks" exact render={() => <TanksHome isUserLoggedIn={isUserLoggedIn} tokenState={tokenState} />} />
            <Route path="/tanks/:tankID" exact component={Tank} tokenState={tokenState}/>
            <Route path="/me" exec render={()=> <UserProfile userAccountInfo={userAccountInfo}  isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />} />
            <Route path="/about" exec component={About} />
          </MainContainer>
        </Router>
    </div>
  );
}

export default App;
