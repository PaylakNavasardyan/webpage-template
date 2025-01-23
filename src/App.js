import './App.css';
import Footer from './footer/Footer';
import Mainpage from './mainpage/Mainpage';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">    
      <Navbar />
      <Mainpage/>
      <Footer />
    </div>
  );
}

export default App;
