import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if(name === 'fName'){
      setContact({
        fName: value,
        lName: contact.lName,
        email: contact.email
      });
    } else if(name === 'lName'){
      setContact({
        fName: contact.fName,
        lName: value,
        email: contact.email
      });
    } else {
      setContact({
        fName: contact.fName,
        lName: contact.lName,
        email: value
      });
    }
  }

  const handleSubmit = () => {
    
  }

  

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName} />
        <input name="email" placeholder="Email" onChange={handleChange} value={contact.email} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
