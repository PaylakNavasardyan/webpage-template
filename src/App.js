import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './footer/Footer';
import Mainpage from './mainpage/Mainpage';
import Navbar from './navbar/Navbar';
import Productspage from './productspage/Productspage';

function App() {
  return (
    <div className="App">    
      <Routes>
        <Route path={'/'} element={
          <>
            <Navbar />
            <Mainpage />
            <Footer />
          </>
        } />

        <Route path='/products' element={
          <>
            <Navbar />
            <Productspage />
            <Footer />
          </>
        } />
        
        <Route path='*' element={
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