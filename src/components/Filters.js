import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import {getUniqueValues,formatPrice} from '../utils/helpers'
import {FaCheck} from 'react-icons/fa'
const Filters = () => {
  const {
    filters : {
      text,
      company,
      category,
      gear,
      fuel,
      years,
      color,
      min_price,
      max_price,
      price,
      registration,
     
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

const categories = getUniqueValues(all_products,'category')
const companies = getUniqueValues(all_products,'company')
const colors = getUniqueValues(all_products,'colors')
const gears = getUniqueValues(all_products,'gear')
const fuels = getUniqueValues(all_products,'fuel')
const allyears = getUniqueValues(all_products,'years')


 return (
  <Wrapper>
   <div className="content">
   <form onSubmit={(e)=>e.preventDefault()}>
     {/*search input */}
     <div className='form-control'>
       <input
       type='text'
       name='text'
       placeholder='search'
       className='search-input'
       value={text}
       onChange={updateFilters}
       />
   </div>
   {/*end search input */}
   {/*company */}
   <div className='form-control'>
      <h5>company</h5>
      <div>
        {companies.map((c,index) => {
          return <button key={index}
          onClick={updateFilters}
          type='button'
          name='company'
          className={`${
            company === c.toLowerCase() ? 'active' : null
          }`}
          
          >{c}</button>
        })}
      </div>
   </div>
   {/*end of company*/}
   {/*category */}
  <div className='form-control'>
    <h5>category</h5>
  <select 
  name='category'
   value={category}
   onChange={updateFilters}
   className='category' >
 {categories.map((c,index)=> {
return <option key={index} value={c}>{c}</option>
 })}
   </select>
  </div>

   {/*end of category */}
 {/*gear */}
  <div className='form-control'>
    <h5>gear</h5>
  <select 
  name='gear'
   value={gear}
   onChange={updateFilters}
   className='gear' >
   {gears.map((c,index) => {
     return <option key={index} value={c}>{c}</option>
   })}
   </select>
  </div>

   {/*end of gear*/}
   {/*fuel */}
  <div className='form-control'>
    <h5>fuel</h5>
  <select 
  name='fuel'
   value={fuel}
   onChange={updateFilters}
   className='fuel' >
 {fuels.map((c,index)=> {
return <option key={index} value={c}>{c}</option>
 })}
   </select>
  </div>

   {/*end of fuel*/}
{/*years */}
  <div className='form-control'>
    <h5>years</h5>
  <select 
  name='years'
   value={years}
   onChange={updateFilters}
   className='years' >
 {allyears.map((c,index)=> {
return <option key={index} value={c}>{c}</option>
 })}
   </select>
  </div>

   {/*end of years*/}

  


   {/*colors */}
   <div className='form-control'>
   <h5>colors</h5>
   <div className='colors'>
     {
       colors.map((c,index)=> {
         if(c === 'all'){
           return (
              <button
              key={index}
               name='color'
          onClick={updateFilters}
          data-color='all'
          className={`${
            color === 'all' ? 'all-btn active' :
            'all-btn'
          }`}
          >all</button>
           )
         }
         return (
         <button key={index} name="color"
         style={{background:c}} className={`${color === c? 
        'color-btn active' : 'color-btn'}`}
         data-color={c}
         onClick={updateFilters}
         >
           {color === c ? <FaCheck/> : null}
         </button>
         )
       })
     }

   </div>
   </div>
   {/*end of colors */}



  


   {/*price */}
   <div className='form-control'>
     <h5>price</h5>
     <p className='price'>{formatPrice(price)}</p>
     <input type="range" name='price' 
     onChange={updateFilters} 
     min={min_price} 
     max={max_price}
     value={price}
     />
   </div>
   {/*end of price */}
   {/*regist*/}
 <div className='form-control registration'>
 <label htmlFor='registration'>registration</label>
 <input type='checkbox' name='registration'
 id='registration'
 onChange={updateFilters} checked={registration}
 />
</div>

   {/* end of regist */}
   </form>
   <button type='button' className='clear-btn'
    onClick={clearFilters}>
      {''}
      clear filters</button>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
.form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-primary-8);
    //background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    //color: var(--clr-grey-5);
    color: var(--clr-primary-3);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .category {
    background: var(--clr-primary-8);
    //background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .gear{
    background: var(--clr-primary-8);
    // background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
.fuel {
  background: var(--clr-primary-8);
    //background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
.years {
  background: var(--clr-primary-8);
    //background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    //border-radius: 50%;
   // background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
     // color: var(--clr-white);
     color: var(--clr-green-dark)
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .kilometre {
    margin-bottom: 0.25rem;
  }
  .registration {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }


`

export default Filters
