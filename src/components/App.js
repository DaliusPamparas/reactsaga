
import React from 'react'
import Header from './Header'

import {  Switch, Route } from 'react-router-dom'
import Varukorg from './Varukorg'
import Katalog from './Katalog'






const App = () => {
  return (
    <div>
     
       
      
      <Header />
      <Switch>
        <Route exact path='/' component={Katalog} />
        <Route path='/varukorg' component={Varukorg} />

      </Switch>

   
      

    </div>
  );
};

export default App;
