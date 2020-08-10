import React from 'react';
import HomePage from './Pages/Homepage';
import Shop from './Pages/Shop';
import ProductPage from './Pages/ProductPage';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer';
import SignIn from './Pages/SignIn';






function App() {
  return (
    <div>

      {/* <HomePage /> */}
      <Nav />
      
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/:giftcat' component={Shop} />
        <Route exact path='/product/:itemId' component={ProductPage} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>

      <Footer />


    </div>
  );
}

export default App;
