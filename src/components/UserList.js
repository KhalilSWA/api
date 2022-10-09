import UserCard from "./UserCard";
import React from 'react'


function UserList ({users, searchName}){
    return(
<div className='row justify-content-center'>
{users.filter(user=>user.name.toUpperCase().includes(searchName.toUpperCase().trim()))
.map((user)=>
<UserCard 
user={user}
key={user.id}
/>
    )}
</div>
    )
}
export default UserList;