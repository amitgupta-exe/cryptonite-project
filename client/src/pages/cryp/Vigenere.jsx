import React, { useState } from 'react';
const crypto = require('text-cryptography');


const Vigenere = () => {

    const [vigenere, setVigenere] = useState("");

    function encryptDecrypt(text, mode, key) {
        //Creating new Baconian Object
        let vig = new crypto.Vigenere(key);

        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = vig.encrypt(text);
            setVigenere(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = vig.decrypt(text);
            setVigenere(decipherText)
        }
    }

    //JSX
    return <main className="main">

        <div>
            <h1>Vignere Cipher</h1>
        </div>

        <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

            <div className="input-output">
                <textarea type="text" id="input" />
                <textarea name="" id="" value={vigenere} onChange={(e) => {
                    setVigenere(e.target.value)
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
};

export default Vigenere;
