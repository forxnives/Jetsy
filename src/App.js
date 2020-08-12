import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

import HomePage from './Pages/Homepage';
import Shop from './Pages/Shop';
import ProductPage from './Pages/ProductPage';
import SignInSignUp from './Pages/SignIn-SignUp';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer';





class App extends React.Component {


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
  
        <Nav />
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/:giftcat' component={Shop} />
          <Route exact path='/product/:itemId' component={ProductPage} />
          <Route exact path='/signin' render={() => this.props.currenUser ? (<Redirect to='/'/>): (<SignInSignUp/>)} />
        </Switch>
  
        <Footer />
  
      </div>
    );
  }
  
}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ user }) => ({
  currenUser: user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);