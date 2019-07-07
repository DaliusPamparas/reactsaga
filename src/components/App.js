
import React from 'react'
import Header from './Header'

import {  Switch, Route } from 'react-router-dom'
import Varukorg from './Varukorg'
import Katalog from './Katalog'
import About from './About'






const App = () => {
  return (
    <div>
     
       
      
      <Header />
      <Switch>
        <Route exact path='/' component={Katalog} />
        <Route path='/varukorg' component={Varukorg} />
        <Route path='/about' component={About} />

      </Switch>

   
      

    </div>
  );
};

export default App;
