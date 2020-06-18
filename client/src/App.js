import React, {useState} from 'react';
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';
import AddTankForm from './components/Forms/AddTankForm';
import TankListing from './components/Listings/TanksListing';

function App() {
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
  }

  const [userAuthState, setUserAuthState] = useState(null);

  return (
    <div className="App">
      <RegisterForm setUserAuth={setUserAuthStateHandler} />
      <LoginForm setUserAuth={setUserAuthStateHandler} />
      <AddTankForm setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} />
      <TankListing userAuthState={userAuthState} />
    </div>
  );
}

export default App;
