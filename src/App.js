import React from "react";
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import {Navbar, Sidebar,Footer} from './components'
import {
  Home,
  SingleProduct,
  Error,
  About,
  Products,
} from './pages'



function App() {
  return (
 <Router>
   <Navbar/>
   <Sidebar/>
   <Switch>
     <Route exact path='/'>
       <Home/>
     </Route>
      <Route exact path='/about'>
       <About/>
     </Route>
      <Route exact path='/products'>
       <Products/>
     </Route>
     <Route path='/products/:id' children={<SingleProduct/>}/>
     <Route  path='*'>
       <Error/>
     </Route>
   </Switch>
   
    <Footer/>
 </Router>

  );
}

export default App;
