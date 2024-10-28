// routesConfig.js
import Header from './components/cryp/Header.jsx';
import FrontPage from './pages/FrontPage';

import Caeser from './pages/cryp/Caeser';
import RailFence from './pages/cryp/RailFence';
import PlayFair from './pages/cryp/PlayFair';
import RowColumnT from './pages/cryp/RowColumnT';
import Baconian from './pages/cryp/Baconian';
import Vigenere from './pages/cryp/Vigenere';
import Atbash from './pages/cryp/Atbash';

import Sha256 from './pages/cryp/Sha256';
import BlowFish from './pages/cryp/BlowFish.jsx';
import MorseCode from './pages/cryp/MorseCode.jsx';

const routesConfig = [
  { path: '/', element: <FrontPage /> },
  { title: "Caeser Cipher", path: '/cryp/caeser', element: <Caeser /> },
  { title: "Rail Fence", path: '/cryp/railfence', element: <RailFence /> },
  { title: "Play Fair",path: '/cryp/playfair', element: <PlayFair /> },
  { title: "Row Column Transposition",path: '/cryp/rc-transposition', element: <RowColumnT /> },
  {title: "Baconian", path: '/cryp/baconian', element: <Baconian /> },
  { title: "Vigenere",path: '/cryp/vigenere', element: <Vigenere /> },
  { title: "Atbash",path: '/cryp/atbash', element: <Atbash /> },
  { title: "Sha256",path: '/cryp/sha256', element: <Sha256 /> },
  {title: "Blowfish", path: '/cryp/blowfish', element: <BlowFish /> },
  { title: "Morse",path: '/cryp/morse', element: <MorseCode /> },
];

export default routesConfig;
