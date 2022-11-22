import React from 'react'


export default function Contact(){
    return (
      <>
          <>
  {/* Hello world */}
  <div className="container">
    <div className="text">Contact Me</div>
    <form action="#">
      <div className="form-row">
        <div className="input-data">
          <input type="text" required="" />
          <div className="underline" />
          <label htmlFor="">First Name</label>
        </div>
        <div className="input-data">
          <input type="text" required="" />
          <div className="underline" />
          <label htmlFor="">Last Name</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" placeholder='Email' required="" />
          <div className="underline" />
         
        </div>
       
      </div>
      <div className="form-row">
        <div className="input-data textarea">
          <textarea rows={8} cols={80} required="" defaultValue={""} />
          <br />
          <div className="underline" />
        
          <br />
          <div className="form-row submit-btn">
            <div className="input-data">
              <div className="inner" />
              <input type="submit" placeholder='Email' defaultValue="submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</>

      </>
    )
}
