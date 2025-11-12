import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" />
        <label htmlFor="Email">Email</label>
        <input type="text" />
        <label htmlFor="Anything">Anything</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
