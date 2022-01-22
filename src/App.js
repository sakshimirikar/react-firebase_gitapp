import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router , Switch,Route,Link }from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/app"
import "firebase/auth"

//components
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Pagenotfound from './pages/Pagenotfound'

import './App.css';
import { Usercontext } from './Context/Usercontext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './Config/FirebaseConfig'
//init firebase
firebase.initializeApp(firebaseConfig)



const App =()=> {

 const [user,setUser]=useState(null)

  return (
    
      <Router>
        <ToastContainer/>
         <Usercontext.Provider value={{user , setUser}}>
           <Header/>
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/signin" component={Signin}/>
             <Route exact path="/signup" component={Signup}/>
             <Route exact path="/*" component={Pagenotfound}/>
           </Switch>
           <Footer/>
         </Usercontext.Provider>
        
         </Router>
   


  )
}
export default App
