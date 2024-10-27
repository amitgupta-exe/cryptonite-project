import './App.css';
import styles from './styles/styles.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import routesConfig from './routesConfig';
import Header from './components/cryp/Header';
import LeftMenu from './components/cryp/LeftMenu';

import Shop from './pages/shop/Shop';
import CheckOut from './pages/shop/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <div className="right">
          <Routes>
            {routesConfig.map(({ path, element }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <>
                    <div className="header">
                      <Header />
                    </div>
                    <div className="body">
                      <div className="left">
                        <LeftMenu />
                      </div>
                      <div className="right">
                        {element}
                      </div>
                    </div>
                  </>
                }
              />
            ))}
            {/* <Route path='shop' element={<Shop />} />
            <Route path='shop/checkout' element={<CheckOut />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import Header from './components/cryp/Header.jsx';
// import FrontPage from './pages/FrontPage';

// import Caeser from './pages/cryp/Caeser';
// import RailFence from './pages/cryp/RailFence';
// import PlayFair from './pages/cryp/PlayFair';
// import RowColumnT from './pages/cryp/RowColumnT';
// import Baconian from './pages/cryp/Baconian';
// import Vigenere from './pages/cryp/Vigenere';
// import Atbash from './pages/cryp/Atbash';

// import Shop from './pages/shop/Shop';
// import CheckOut from './pages/shop/CheckOut'
// import Sha256 from './pages/cryp/Sha256';
// import LeftMenu from './components/cryp/LeftMenu';
// import BlowFish from './pages/cryp/BlowFish.jsx';
// import MorseCode from './pages/cryp/MorseCode.jsx';

// function App() {

//   console.log("App");



//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div className="main-container">
//           <div className="right">
//             <Routes>
//               <Route path="/" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<div className="right"><FrontPage /></div></div>]} />
//               <Route path="cryp/caeser" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<Caeser /></div>]} />
//               <Route path="cryp/railfence" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<RailFence /></div>]} />
//               <Route path="cryp/playfair" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<PlayFair /></div>]} />
//               <Route path="cryp/rc-transposition" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<RowColumnT /></div>]} />
//               <Route path="cryp/baconian" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<Baconian /></div>]} />
//               <Route path="cryp/vigenere" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<Vigenere /></div>]} />
//               <Route path="cryp/atbash" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<Atbash /></div>]} />
//               <Route path="cryp/sha256" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<Sha256 /></div>]} />
//               <Route path="cryp/blowfish" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<BlowFish /></div>]} />
//               <Route path="cryp/morse" element={[<div className="header"><Header /></div>,<div className='body'><div className="left"><LeftMenu /></div>,<MorseCode /></div>]} />
//               {/* Shop */}
//               <Route path='shop' element={<Shop />} />
//               <Route path='shop/checkout' element={<CheckOut />} />
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter >
//     </div >
//   );
// }

// export default App;