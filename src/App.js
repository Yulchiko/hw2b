import {useState} from "react";

import styles from './App.module.css';
import Users from "./Components/Users/Users";
import {Posts} from "./Components/Posts/Posts";
import {UserDetails} from "./Components/UserDetails/UserDetails";

function App() {
    const [user, setUser] = useState(null)
    const [userIdPost, setUserId] = useState(null)

    return (
        <div>
            <div className={styles.App}>
                <div className={styles.Users}><Users setUser={setUser} setUserId={setUserId}/>}</div>
                <div className={styles.Details}>{user && <UserDetails user={user} setUserId={setUserId}/>}</div>
            </div>
            <div>{userIdPost && <Posts userIdPost={userIdPost}/>}</div>
        </div>
    );
}

export default App;
