import { useState } from 'react';
import './App.css';
import UserForm from './component/UserForm';

function App() {
  const [inputs, setInputs] = useState({
    firstName:"",lastName:"",email:"",password:"", confPassword:""
  })
  return (
    <div className="App">
      <UserForm inputs={inputs} setInputs={setInputs}/>
    </div>
  );
}

export default App;
