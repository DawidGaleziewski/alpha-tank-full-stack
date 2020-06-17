import React, {useState} from 'react';
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';
import AddTankForm from './components/Forms/AddTankForm';

function App() {
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
    console.log(userAuthData)
  }

  const [userAuthState, setUserAuthState] = useState(null);

  return (
    <div className="App">
      <RegisterForm setUserAuth={setUserAuthStateHandler} />
      <LoginForm setUserAuth={setUserAuthStateHandler} />
      <AddTankForm setUserAuth={setUserAuthStateHandler} userAuthState={userAuthState} />
    </div>
  );
}

export default App;
