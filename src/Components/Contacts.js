import React from 'react'
import ContactUserCard from './ContactUserCard'

function Contacts() {
  return (
    <div className='wrapper'>
        <h2>Contacts</h2>
        <div className='d-flex flex-column mb-3 contactUserCards'>
            <div class="contactUserCard p-2">
                <ContactUserCard />
            </div>
            <div class="contactUserCard p-2">
                <ContactUserCard />
            </div>
            <div class="contactUserCard p-2">
                <ContactUserCard />
            </div>
            <div class="contactUserCard p-2">
                <ContactUserCard />
            </div>
        </div>
    </div>
  )
}

export default Contacts