import ContactUserCard from "./ContactUserCard"

 const Contacts = () => {
     return (
         <div className="Contacts">
             <h2>Contacts</h2>
             <section className="user-card">
                 <ContactUserCard />
                 <ContactUserCard />
                 <ContactUserCard />
                 <ContactUserCard />
             </section>
         </div>
     )
 }

 export default Contacts;