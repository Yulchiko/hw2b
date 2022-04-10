import React from 'react';


export const User = ({ user, setUser, setUserId }) => {

    const click = () => {
        setUserId(false);
        setUser(user);
    }

    return (
        <div>
            {user.id}.
            {user.name}
            {user.username},
            {user.email}
            <input type="button" value="show info" onClick={click}/>
        </div>
    );
}