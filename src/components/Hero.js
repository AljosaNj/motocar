import React from 'react'
import ImageSlider from './ImageSlider'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

const Hero = () => {
 return (
  <Wrapper  >
  
   <div>
     <ImageSlider images={[slide1,slide2,slide3,slide4]}>
      
<div     style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              //color: "#fff",
            }}  >
<h1>choose your car</h1>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?</p>
</div>
<div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
            }}  > 
<Link to='/products' className='btn hero-btn'>
          Cars
   </Link>
</div>


    </ImageSlider>
   </div>
   
  </Wrapper>
 )
}

const Wrapper = styled.section`
    p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-white);
    font-size: 1rem;
  }

    h1 {
      margin-bottom: 2rem;
       color:  var(--clr-primary-5);
    }
   
    .hero-btn {
      padding: 0.45rem 0.75rem;
      font-size: 1rem;
    } 


@media (min-width: 992px) {

 p {
      font-size: 1.25rem;
        color: var(--clr-white);
    }
h1 {
  color:  var(--clr-primary-5);
}
.hero-btn {
 align-items: flex-end;
   padding: 0.35rem 1.5rem;
      font-size: 1.7rem;
     
}
.btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-8);
}
  
    }
`

export default Hero
