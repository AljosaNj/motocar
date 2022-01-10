import React ,{useEffect}from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {useProductsContext} from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import {formatPrice} from '../utils/helpers'
import {FaRoad,FaRegCalendarAlt,FaGasPump} from 'react-icons/fa'
import {ImPower} from 'react-icons/im'
import {GiGearStickPattern} from 'react-icons/gi'
import {IoCarSportSharp} from 'react-icons/io5'
import {
 Loading,
 Error,
 ProductImages,
 Stars,
 PageHero,
} from '../components'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const SingleProductPage = () => {

 const {id} = useParams();
 const history = useHistory()
 const {
  single_product_loading:loading,
  single_product_error:error,
  single_product:product,
  fetchSingleProduct,
 } = useProductsContext()

useEffect(() => {
 fetchSingleProduct(`${url}${id}`)
 // eslint-disable-next-line
},[id])

useEffect(() => {
 if(error){
  setTimeout(()=> {
history.push('/')
  },3000)
 }
  // eslint-disable-next-line
},[error])


if(loading){
 return <Loading/>
}
if (error) {
 return <Error/>
}
const {
 name,
 price,
 description,
 kilometre,
 power,
 fuel,
 gear,
 years,
 company,
 images
} = product
 return (
  <Wrapper>
   <PageHero title={name} product />
   <div className='section section-center page'>
  <Link to='/products' className='btn'>
     back to products
   </Link>
 <div className='product-center'>
<ProductImages images={images}/>
<section className='content'>
<h2>{name}</h2>
<Stars/>
<h5 className='price'>{formatPrice(price)}</h5>
<p className='desc'>{description}</p>
<hr/>
<p className="info">
  <span><FaRoad className='road'/></span>
   {kilometre}km
 
</p>
<hr/>


<p className="info">
  <span><FaRegCalendarAlt className='road' /></span>
  {years}
</p>
<hr/>
<p className="info">
  <span><ImPower className='road'/></span>
 {power}kW
</p>
<hr/>
<p className="info">
  <span><FaGasPump className='road'/></span>
 {fuel}
</p>
<hr/>
<p className="info">
  <span><GiGearStickPattern className='road'/></span>
 {gear}
</p>
<hr/>
<p className="info">
  <span><IoCarSportSharp className='road' /></span>
 {company}
</p>
<hr/>
</section>
 </div>
   </div>
 
  </Wrapper>
 )
}

const Wrapper = styled.main`
.product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
.road{
margin-top: 0.3rem;
color: var(--clr-primary-5);
}
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }




`

export default SingleProductPage
