import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import setCurrentUser from './redux/user/user.actions';
import { toggleCartHidden } from './redux/cart/cart.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './Pages/Homepage';
import Shop from './Pages/Shop';

import ProductPage from './Pages/ProductPage';
import SignInSignUp from './Pages/SignIn-SignUp';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer';
// import { selectCartItemsCount } from './redux/cart/cart.selectors';

import productJSON from './productJSON'
import { directoryPopular } from './redux/directory/directory.utils'



class App extends React.Component {


  testFunc() {

    const ting = directoryPopular(productJSON)

    // const testArray = [4, 9, 2, 8]

    // const tester = testArray.findIndex(item => item === 46)
    
    console.log(ting)

  }


  //declaring variable for unsubscribe function to be returned
  unsubscribeFromAuth = null;

  //Setting up listener for authstate change and storing returned unsubscribe function
  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      //takes userAuth object generated on sign in and adds to firebase (see firebase.utils)
      console.log(userAuth);

      if (userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {


            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
              
            });
          });

      } else {
        setCurrentUser(userAuth)
      }

      // console.log(userAuth);
    })
  };

//unsubscribing from 
  componentWillUnmount () {

    this.unsubscribeFromAuth()
  }

  render() {

    return (
      <div>

        {/* <button onClick={() => this.testFunc()}>testMe</button> */}
  
        <Nav />
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/cartitems' component={CartPage} />
          {/* <Route path='/item/' component={Item} /> */}

          <Route path='/shop' component={Shop} />
          <Route path='/product/:itemId' component={ProductPage} />
          <Route exact path='/signin' render={() => this.props.currenUser ? (<Redirect to='/'/>): (<SignInSignUp/>)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
  
        <Footer />
  
      </div>
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
})



const mapStateToProps = createStructuredSelector ({
  currenUser: selectCurrentUser
})



export default connect(mapStateToProps, mapDispatchToProps)(App);