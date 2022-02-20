import React from 'react';
import styled from 'styled-components';
import {Map,GoogleApiWrapper,Marker} from 'google-maps-react'
const MapLoc = (props) => {
  return <Wrapper>
    <div className='services-center'>
     <Map
     className='map-center'
google={props.google}
zoom={14}
style={mapStyles}
initialCenter={{ lat: 44.781786, lng: 17.206285 }}
>
<Marker position={{ lat: 44.781786, lng: 17.206285 }}  />
</Map> 
    </div>

  </Wrapper>


};
const mapStyles = {
 width: '70%',
 height: '40%',
 
};
const Wrapper = styled.section`


width: 100%;
height: 100%;
padding: 5rem 0;
margin-top: -4rem;
margin-bottom: 7rem;
margin-left: 7rem;

.services-center {
   margin-top: 1rem;
   display: grid;
  gap: 2.5rem;

  }


   //.map-center {
   //text-align: center;
  //  padding: 3.5rem 2rem;
   // border-radius: var(--radius);
   // margin-top: -3rem;
   // margin-bottom: 2rem;
//}


`



export default GoogleApiWrapper({
//apiKey: ''
})(MapLoc);
//AIzaSyAxZf_tf76JbWhyQX_JpNjkzlW-yEKJrw0