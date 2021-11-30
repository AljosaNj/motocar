import React from 'react'
import styled from 'styled-components'
import {FaPhoneAlt, FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa'

const InfoButtons = () => {
 return (
  <Wrapper >
   <ul className='soc-links'>
    <h5>+23994892929</h5>
    <li><a href='https://www.facebook.com/' target="blank"  ><FaPhoneAlt/></a></li> 
      <li >  <a href='https://www.facebook.com/' target="blank"><FaFacebook /></a></li>
      <li> <a href='https://www.instagram.com/'target="blank" ><FaInstagram/></a></li>
      <li><a href='https://www.youtube.com/' target="blank" ><FaYoutube/></a></li>
    </ul>

  </Wrapper>
 )
}

const Wrapper = styled.footer`
 



 height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 //background: var(--clr-white);
  background: var(--clr-primary-11);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-primary-6);
    //color: var(--clr-black);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .soc-links{
    display: flex;
    justify-content: left;
    

    align-items: center;
    li{
      margin:  0 0.5rem;
    }
    a{
      color: var(--clr-primary-6);
        //color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
           &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
         
        }
    }
   
  }
 /* @media (min-width: 776px) {
    flex-direction: row;
  
  }*/
    

`


export default InfoButtons
