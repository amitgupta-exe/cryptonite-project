import React, { useState } from 'react';
const crypto = require('text-cryptography');


const Vigenere = () => {

    const [vigenere, setVigenere] = useState("");

    function vig(text, mode, key) {
        //Creating new Baconian Object
        let bacon = new crypto.Vigenere(key);

        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = bacon.encrypt(text);
            setVigenere(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = bacon.decrypt(text);
            setVigenere(decipherText)
        }
    }

    //JSX
    return <main className="main container-middle">

        {/* <img className="caeser-bg" src={} alt="" /> */}
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
                    <button onClick={() => { vig(document.getElementById("input").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
                </div>

                <div className="output">
                    <label htmlFor="output">Output</label>
                    <textarea name="" id="" value={vigenere} onChange={(e) => {
                        setVigenere(e.target.value)
                    }} />
                </div>
            </form>
        </div>

        <div className="right-section">


            <div className="wiki">
                <div>

                    <h2>Vigenere Cipher </h2>
                    <h3>Blaise de Vigenère</h3>
                    <p>The Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers.</p>
                </div>
            </div>
        </div>

    </main>
};

export default Vigenere;
