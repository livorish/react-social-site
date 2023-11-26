import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return <div className={classes.content}>
    <div>
      <img src="https://img.freepik.com/free-photo/blue-foaming-waves-in-north-beach-in-nazare-portugal_1268-15934.jpg?w=900&t=st=1701003035~exp=1701003635~hmac=f37e9b7447b676f3e6f3b1f604fe7b6418f7bcfce8894131b586ec7db486f8cc" />
    </div>
    <div>
      ava + descr
    </div>
    <MyPosts />
  </div>
}


export default Profile;