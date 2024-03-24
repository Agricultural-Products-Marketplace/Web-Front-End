import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from "./commen/topBar";
import Footer from "./commen/footer";
import NavBar from "./commen/navBar";
import Home from './Pages/home';
import SignUp from './Pages/auth/signUp';
import CustomerSignUp from './Pages/auth/signUp/customerSignup';
import EmailVerification from './Pages/auth/verificationCard';
import SignIn from './Pages/auth/signIn';

function App(): JSX.Element {
  return (
    <Home />
  );
}

export default App;
