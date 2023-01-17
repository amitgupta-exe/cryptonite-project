import React, { useState } from 'react';

var playfair = require('crypto-classic-playfair');

const PlayFair = () => {

  const [fairText, setFairText] = useState("");

  function fair(text, mode, key) {

    if (mode === 'encrypt') {
      var ciperText = playfair.encipher(text, key);
      setFairText(ciperText);
    } else if (mode === 'decrypt') {
      var decipherText = playfair.decipher(text, key);
      setFairText(decipherText)
    }
  }

  return <main className="main container-middle">


    <div className="left-section">

      <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

        <div className="input">
          <label htmlFor="input">Enter Text</label>
          <textarea type="text" id="input" />
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
          <button onClick={() => { fair(document.getElementById("input").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
        </div>
        <div className="output">
          <label htmlFor="output">Output</label>
          <textarea name="" id="" value={fairText} onChange={(e) => {
            setFairText(e.target.value)
          }} />
        </div>
      </form>
    </div>
    <div className="right-section">
      <div className="wiki">
        <div>
          <h2>PlayFair Cipher </h2>
          <h3>Wheatstone-Playfair</h3>
          <p>The Playfair cipher or Playfair square or Wheatstone-Playfair cipher is a manual symmetric encryption technique and was the first literal digram substitution cipher.</p>
        </div>
      </div>
    </div>


  </main>
};

export default PlayFair;
