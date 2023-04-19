import React from 'react'

function ContactUserCard() {
  return (
    <div id="contactUserCard">
    <h3>User Profile</h3>
    <img src="./profile.png" alt="Temporary Head" />
    <b><p id='contactName'>FirstName LastName</p></b>
    <p id='contactTitle'>  Title</p>
    <p id='contactComments'>    Lorem ipsum.</p>
    </div>
  )
}

export default ContactUserCard