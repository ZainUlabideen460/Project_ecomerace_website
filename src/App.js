import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import Account from './components/Account'
import Checkout from './components/Checkout'
import Wishlistt from './components/Wishlistt';
import Card from './components/Card';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/account" element={<Account/>} />
          <Route path='/product/:slug' element={<Detail/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/wishlistt' element={<Wishlistt/>} />
          <Route path='/card' element={<Card/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
