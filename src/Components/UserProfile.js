import React from 'react'
import Contacts from './Contacts';
import Posts from './Posts';

function UserProfile() {
  return (
    <div>
        <div className='currentUser'>
            <img src='/public/profile.png'/>
            <h2>Jordan Walker</h2>
            <h3>React Creator</h3>
            <p>Lorem ipsum</p>
        </div>
        
        <Contacts />
        <Posts />
    </div>
  )
}

export default UserProfile