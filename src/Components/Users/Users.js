import React, {useEffect, useState} from 'react';

import {userService} from "../../Service/userService";
import {User} from "../User/User";



const Users = ({setUser, setUserId}) => {
    const [users, setUsers] = useState(null);

    useEffect(()=>{
        userService.getAll()
            .then(({data})=>setUsers((data)))

    },[])

    return (
        <div>
            {users ? users.map((user) => <User key={user.id} user={user} setUser={setUser} setUserId={setUserId}/>)
            : "Loading.."
            }
        </div>
    );
};

export default Users;