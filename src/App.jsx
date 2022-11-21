import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/login';
import SignUp from './pages/register';

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/register' element={ <SignUp /> } />
      <Route path='/login' element={ <SignIn /> } />
      <Route path='/home' element={ <Home /> } />
    </Routes>
  </BrowserRouter>

  {/* <SignIn/>
  <SignUp/> */}
  </>
}

export default App
