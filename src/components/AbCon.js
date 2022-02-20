import React from 'react';
import styled from 'styled-components';
import {aboutcontact} from '../utils/constants'

const AbCon = () => {
  return (
   <Wrapper>
    <div className='section-center'>
     <div className='services-center'>
    {aboutcontact.map((aboutcon) => {
      const {id,icon,title,text} = aboutcon
      return (
       <article className='aboutcon' key={id}>
        <span className='icon'>{icon}</span>
        <h4>{title}</h4>
        <h4>{text}</h4>
       </article>
      )
    })}
     </div>

    </div>
   </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 5rem 0;
//background: var(--clr-primary-11);
//margin-top: -3rem;
//margin-bottom: 6rem;
h4 {
  //color: var(--clr-primary-7);
  color: var(--clr-black);
}
.p {
  margin-bottom: 0;
    line-height: 1.8;
  color: var(--clr-primary-3);
  //color: var(--clr-white);
}
.services-center {
    margin-top: 1rem;
    display: grid;
    gap: 2.5rem;
    //background: var(--clr-primary-3);
   
  }
.aboutcon {
 //background: var(--clr-white);
   //background: var(--clr-primary-3);
   text-align: center;
    padding: 3.5rem 2rem;
    border-radius: var(--radius);
    margin-top: -3rem;
    margin-bottom: 2rem;
}
p {
  color: var(--clr-primary-2);
  //color: var(--clr-black);
}
span {
   width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    //border-radius: 50%;
    background: var(--clr-primary-7);
    //background: var(--clr-primary-3);
     //color: var(--clr-primary-1);
     //color: var(--clr-white);
     //color: var(--clr-primary-11);
}
svg {
      font-size: 2rem;
    }
    @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`


export default AbCon;
