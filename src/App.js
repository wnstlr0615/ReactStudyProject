import React, {useRef, useState, useMemo} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs]=useState({
    username:'',
    email:'',
  });

  function countActiveUsers(users){
      console.log('활설 사용자 수를 세는중...');
      return users.filter(user=>user.active).length;
  }
  const {username, email}=inputs;
  const onChange=e=>{
    const {name, value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }
  const [users, setUsers]=useState([
    {
        id:1,
        username:'joon',
        email:'public.joon@naver.com',
        active: true
    },
      {
        id:2,
        username:'hello',
        email:'public.hello@naver.com',
        active: false
    },
    {
        id:3,
        username:'test',
        email:'public.test@naver.com',
        active: false
    },
]);

  const nextId=useRef(4);
  const onCreate=()=>{
    const user={
      id:nextId.current,
      username,
      email,
    };
    setUsers([...users,user]);

    setInputs({
      username:'',
      email:'',
    });
    
      console.log(nextId.current);
      nextId.current+=1;
  }
  const onRemove=id =>{
    setUsers(users.filter(user=>user.id!==id));
  };
  const onToggle=id=>{
      setUsers(
        users.map(
          user=>user.id===id
          ?{...user, active:!user.active}
          :user
      ));
  };
  const count=useMemo(()=>countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange}
      onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 {count}</div>
    </>
    );
}

export default App;
