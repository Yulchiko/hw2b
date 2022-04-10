import React from 'react';

export const UserDetails = ({ user, setUserId }) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <input type="button" value="show posts" onClick={() => setUserId(user.id)}/>
        </div>
    );
}