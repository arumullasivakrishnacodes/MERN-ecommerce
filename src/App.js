import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Global.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-main-container'>Home
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        
      </div>

    </div>
  );
}

export default App;
