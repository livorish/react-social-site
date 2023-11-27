import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
    <div className={classes.posts}>
    <Post message="Hi, I am stupid" like="5"/>
    <Post message="Me too, I am also stupid" like="16"/>
    </div>
    </div>
}


export default MyPosts;