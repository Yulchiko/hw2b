import React, {useEffect, useState} from 'react';

import {PostService} from "../../Service/PostService";
import {Post} from "../Post/Post";

export const Posts = ({userIdPost}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        PostService.getAllPost(userIdPost)
            .then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {posts ? posts.map((post) => <Post key={post.id} post={post}/>)
                : 'Loading...'}
        </div>
    );
}