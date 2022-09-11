import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  const [use,setUse] = useState([]);
  const anyfunction = (expe) =>{
      setUse((prevUser) => {
        return[...prevUser,expe ];
      });
  };

  return (
    <div className="App">
      <Form  pampinchali={anyfunction}/>
      <UserList users = {use} />
    </div>
  );
}

export default App;
