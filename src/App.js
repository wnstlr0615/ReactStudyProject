import React, {userRef} from 'react';
import UserList from './UserList';

function App() {
  const users=[
    {
        id:1,
        username:'joon',
        email:'public.joon@naver.com'
    },
      {
        id:2,
        username:'hello',
        email:'public.hello@naver.com'
    },
    {
        id:3,
        username:'test',
        email:'public.test@naver.com'
    },
];

  const nextId=userRef(4);
  const onCreate=()=>{
      console.log(nextId.current);
      nextId.current+=1;
  }
  return (
      <UserList users={users}/>
    );
}

export default App;
