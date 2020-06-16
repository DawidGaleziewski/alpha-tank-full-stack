import React, {useState} from 'react';
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';

function App() {
  const setUserAuthStateHandler = (userAuthData) => {
    setUserAuthState(userAuthData);
    console.log(userAuthData)
  }

  const [userAuthState, setUserAuthState] = useState(null);

  return (
    <div className="App">
      <RegisterForm />
      <LoginForm setUserAuth={setUserAuthStateHandler} />
    </div>
  );
}

export default App;
