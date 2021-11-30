import React from 'react'
import styled from 'styled-components'
import { FaFacebook,FaInstagram , FaYoutube } from 'react-icons/fa'

const Footer = () => {
 return (
  <Wrapper>
 <h5>
      &copy; {new Date().getFullYear()}
      <span>Motocar</span>
    </h5>
    <h5>All rights reserved</h5>
    <ul className='soc-links'>
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
 background: var(--clr-black);
  text-align: center;
 span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .soc-links{
    display: flex;
    justify-content: left;
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
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
