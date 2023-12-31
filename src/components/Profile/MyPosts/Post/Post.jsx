import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return <div>
      <div className={classes.item}>
        <img src="https://www.vokrug.tv/pic/product/6/a/0/b/6a0bbf9e1e4b3c4564c562f91c6d43ec.jpeg"/>
        {props.message}
        <div>
          <span>likes: {props.like}</span>
        </div>
      </div>
    </div>
}


export default Post;