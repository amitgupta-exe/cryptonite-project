import './App.css';
import styles from './styles/styles.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Header from './components/cryp/Header.jsx';
import FrontPage from './pages/FrontPage';

import Caeser from './pages/cryp/Caeser';
import RailFence from './pages/cryp/RailFence';
import PlayFair from './pages/cryp/PlayFair';
import RowColumnT from './pages/cryp/RowColumnT';
import Baconian from './pages/cryp/Baconian';
import Vigenere from './pages/cryp/Vigenere';
import Atbash from './pages/cryp/Atbash';

import Shop from './pages/shop/Shop';
import CheckOut from './pages/shop/CheckOut'
import Sha256 from './pages/cryp/Sha256';


function App() {

  console.log("App");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Header />, <FrontPage />]} />
          <Route path="cryp/caeser" element={[<Header />, <Caeser />]} />
          <Route path="cryp/railfence" element={[<Header />, <RailFence />]} />
          <Route path="cryp/playfair" element={[<Header />, <PlayFair />]} />
          <Route path="cryp/rc-transposition" element={[<Header />, <RowColumnT />]} />
          <Route path="cryp/baconian" element={[<Header />, <Baconian />]} />
          <Route path="cryp/vigenere" element={[<Header />, <Vigenere />]} />
          <Route path="cryp/atbash" element={[<Header />, <Atbash />]} />
          <Route path="cryp/sha256" element={[<Header />, <Sha256 />]} />


          {/* Shop */}
          <Route path='shop' element={<Shop />} />
          <Route path='shop/checkout' element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;