import React, { useState } from 'react';

var playfair = require('crypto-classic-playfair');

const PlayFair = () => {

  const [fairText, setFairText] = useState("");

  function encryptDecrypt(text, mode, key) {

    if (mode === 'encrypt') {
      var ciperText = playfair.encipher(text, key);
      setFairText(ciperText);
    } else if (mode === 'decrypt') {
      var decipherText = playfair.decipher(text, key);
      setFairText(decipherText)
    }
  }

  return (<main className="main">

    <div>
      <h1>Play Fair Cipher</h1>
    </div>



    <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

      <div className="input-output">
        <textarea placeholder="Input" type="text" id="input" />
        <textarea placeholder="Output" name="" id="" value={fairText} onChange={(e) => {
          setFairText(e.target.value)
        }} />
      </div>
      <div className="settings">
        <div>
          <label htmlFor="#key">Enter Key (Word): </label>
          <input id='key' type="text" />
        </div>
        <select defaultValue={"encrypt"} name="" id="mode">
          <option value="encrypt">Encrypt</option>
          <option value="decrypt">Decrypt</option>
        </select>
        <button onClick={() => { encryptDecrypt(document.getElementById("input").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
      </div>
    </form>


  </main>
  )
};

export default PlayFair;
