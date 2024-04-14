import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Global.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Profile from './Pages/Profile';
import Footer from './Components/Footer/Footer';
import PLP from './Pages/PLP';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className='app-main-container'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/men' element={<PLP category='men' />} />
            <Route path='/women' element={<PLP category='women' />} />
            <Route path='/kids' element={<PLP category='kids' />} />
          </Routes>
      </div>
      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
