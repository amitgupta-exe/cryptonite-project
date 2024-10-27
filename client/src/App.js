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
import LeftMenu from './components/cryp/LeftMenu';
import BlowFish from './pages/cryp/BlowFish.jsx';

function App() {

  console.log("App");

  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-container">

          <div className="header">
            <Header />
          </div>

          <div className="body">
            
            <div className="left">
              <LeftMenu />
            </div>

            <div className="right">
              <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="cryp/caeser" element={<Caeser />} />
                <Route path="cryp/railfence" element={<RailFence />} />
                <Route path="cryp/playfair" element={<PlayFair />} />
                <Route path="cryp/rc-transposition" element={<RowColumnT />} />
                <Route path="cryp/baconian" element={<Baconian />} />
                <Route path="cryp/vigenere" element={<Vigenere />} />
                <Route path="cryp/atbash" element={<Atbash />} />
                <Route path="cryp/sha256" element={<Sha256 />} />
                <Route path="cryp/blowfish" element={<BlowFish />} />

                {/* Shop */}
                <Route path='shop' element={<Shop />} />
                <Route path='shop/checkout' element={<CheckOut />} />
              </Routes>
            </div>
          </div>

        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;