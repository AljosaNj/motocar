import React from 'react'
import styled from 'styled-components'


const Contact = () => {
 return (
 <Wrapper >
  <div className='section-center'>
 

	 <div className='container'>
   
   <h2>Contact Us</h2>
 <form  
action="https://formspree.io/f/mgerjjgn"
  method="POST"
>
  
    <input
    className='form-group'
    type='text'
    name="name"
    placeholder="Name"
    />
    
<input
type='email'
className='form-group'
placeholder='Enter Email'
name="_replyto"
/>
<textarea
className='form-group'
name="message"
placeholder='Message'
cols="30"
rows="10"
/>

<button type='submit' className='submit-btn'>
 send
</button>

 
 </form>
 </div>

 </div>



 </Wrapper>
 )
}

const Wrapper = styled.section`
   padding: 5rem 0;
 h5 {
    text-transform: none;
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
    text-align: right;
    text-transform: capitalize;
   padding: 10px;
   position: relative;
   right:-720px;
    top:130px
    
  }
  p {
   
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }




  
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
 
  .submit-btn {
    width: 100%;
    
    border: none;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    margin-top: 50px;
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
//contact form
height: 100vh;
width: 100%;
//background-color: var(--clr-primary-9);
display: flex;
align-items: center;
justify-content: center;

.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000010;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 20px;
}
.form-group {
  width: 100%;
  margin-top: 0px;
  font-size: 20px;
}

.form-group  {
  
  width: 100%;
  //padding: 5px;
  padding: 0.5rem 1rem;
  font-size: 11px;
   //font-size: 0.6rem;
    border: 2px solid rgba(0, 0, 0, 0);
  //border: 1px solid rgba(128,128,128,0.198);
  margin-top: 5px;
  background-color: rgba(230, 230, 230, 0.6);
}
textarea {
  resize: vertical;
  min-height: 150px;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
}

h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
  left: 30%;
}

h2:after {
  content: "";
  position: absolute;
  left: 20%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: var(--clr-primary-5);
}


   @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }

   
  }


  @media (min-width: 1280px) {
    padding: 15rem 0;
  }


`
export default Contact
