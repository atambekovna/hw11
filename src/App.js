import { useState } from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
  
  const [userList,setUserList] = useState([]);


  const addUserHandler = (uName,uAge) => {
 
    setUserList((prevUserList) => {
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }

  const getData = (id) => {
    setUserList((prevState) => {
      return prevState.filter((item) => {
        return item.id != id;
      })
    })
  }




  return (
    <div className="App">
     <AddUser onAddUser={ addUserHandler } />
     <UserList users={userList} onGetData={getData}/>
    </div>
  );
}

export default App;
