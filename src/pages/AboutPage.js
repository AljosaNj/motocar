import React from 'react'
import styled from 'styled-components'
import { PageHero,Contact,MapLoc ,AbCon} from '../components'
const AboutPage = () => {
 return (
  <main>
   <PageHero title="about" />
   <Wrapper>
    <div>
       <MapLoc/>
      <Contact/>
      <AbCon/>
     
    </div>
   
   </Wrapper>
   
  </main>
 )
}

const Wrapper = styled.div`
.contacts {
 display: grid;
 gap: 3rem 1.5rem;
 margin: 4rem auto;
}
@media (min-width: 768px) {
 .contacts {
  grid-template-columns: 200px 1fr;
 }
}

`


export default AboutPage

