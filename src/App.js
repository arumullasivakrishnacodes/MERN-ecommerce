import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Global.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Profile from './Pages/Profile';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-main-container'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App;
