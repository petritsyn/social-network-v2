import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Post post={'First post'} likesCount={10}/>
            <Post post={'Second post'} likesCount={20}/>
        </div>
    )
}

export default MyPosts;