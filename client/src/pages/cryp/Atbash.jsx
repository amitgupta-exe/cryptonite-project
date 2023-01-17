import React, { useState } from 'react';
const crypto = require('text-cryptography');


const Atbash = () => {

    const [atbashText, setatbashText] = useState("");

    function atbash(text, mode) {
        //Creating new Baconian Object
        let atbash = new crypto.Atbash();

        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = atbash.encrypt(text);
            setatbashText(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = atbash.decrypt(text);
            setatbashText(decipherText)
        }
    }

    //JSX
    return <main className="main container-middle">
        <div className="left-section">

            {/* <img className="caeser-bg" src={} alt="" /> */} 

            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="input">
                    <label htmlFor="input">Enter Text</label>
                    <textarea type="text" id="input" />
                </div>

                <div className="settings">
                    <select defaultValue={"encrypt"} name="" id="mode">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                    <button onClick={() => { atbash(document.getElementById("input").value, document.getElementById("mode").value) }} type="submit">Convert</button>
                </div>

                <div className="output">
                    <label htmlFor="output">Output</label>
                    <textarea name="" id="" value={atbashText} onChange={(e) => {
                        setatbashText(e.target.value)
                    }} />

                </div>
            </form>
        </div>

        <div className="right-section">
            <div className="wiki">
                <div>
                    <h2>Atbash Cipher </h2>
                    <h3>Hebrews</h3>
                    <p>Atbash is a monoalphabetic substitution cipher originally used to encrypt the Hebrew alphabet.</p>
                </div>
            </div>
        </div>

    </main>
};

export default Atbash;
