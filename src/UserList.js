import React from 'react';

function User({user}){
    return(
        <div>
                <b>{user.username}</b><span>({user.email})</span>
        </div>
    )
}
function UserList(){
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

    return( 
        <div>
            {
                users.map(
                    user=>(<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}
export default UserList;