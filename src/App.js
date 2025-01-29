import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Mainpage from './mainpage/Mainpage';
import Navbar from './navbar/Navbar';
import Productspage from './productspage/Productspage';
import Aboutus from './abutuspage/Aboutus';
import Contactus from './contactuspage/Contactus';
import Login from './loginpage/Login';

function App() {
  return (
    <div className="App">    
      <Routes>       
        <Route path={'/'} element = {
          <>
            <Navbar />
            <Mainpage />
               <Footer />
            </>
          } />

          <Route path='/products' element = {
            <>
              <Navbar />
              <Productspage />
              <Footer />
            </>
          } />
          
          <Route path='/about' element = {
            <>
              <Navbar />
              <Aboutus />
              <Footer />
            </>
          } />
          
          <Route path='/contact' element = {
            <>
              <Navbar />
              <Contactus />
              <Footer />
            </>
          } />

          <Route path='LogIn' element = {<Login />} />

          <Route path='*' element = {
            <>
              <Navbar />
              <div><h2>Page is not found</h2></div>
            </>
          } />
      </Routes>
    </div>    
  );
}

export default App;