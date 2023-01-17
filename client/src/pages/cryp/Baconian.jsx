import React, { useState } from 'react';

const crypto = require('text-cryptography');


const Baconian = () => {

    const [baconian, setBaconian] = useState("");

    function bacon(text, mode) {
        //Creating new Baconian Object
        let bacon = new crypto.Baconian();

        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = bacon.encrypt(text);
            setBaconian(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = bacon.decrypt(text);
            setBaconian(decipherText)
        }
    }

    //JSX
    return <main className="main container-middle">

        <div className="left-section">

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
                    <button onClick={() => { bacon(document.getElementById("input").value, document.getElementById("mode").value) }} type="submit">Convert</button>
                </div>

                <div className="output">
                    <label htmlFor="output">Output</label>
                    <textarea name="" id="" value={baconian} onChange={(e) => {
                        setBaconian(e.target.value)
                    }} />
                </div>
            </form>

        </div>
        <div className="right-section">

            <div className="wiki">
                <div>

                    <h2>Baconian Cipher </h2>
                    <h3>Francis Bacon</h3>
                    <p>Bacon's cipher or the Baconian cipher is a method of steganographic message encoding devised by Francis Bacon in 1605</p>
                </div>
            </div>
        </div>

    </main>
};

export default Baconian;
