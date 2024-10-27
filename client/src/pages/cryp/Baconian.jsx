import React, { useState } from 'react';

const crypto = require('text-cryptography');


const Baconian = () => {

    const [baconian, setBaconian] = useState("");

    function encryptDecrypt(text, mode) {
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
    return <main className="main">

        <div>
            <h1>Baconian Cipher</h1>
        </div>
        <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

            <div className="input-output">
                <textarea type="text" id="input" />
                <textarea name="" id="" value={baconian} onChange={(e) => {
                    setBaconian(e.target.value)
                }} />
            </div>

            <div className="settings">
                <select defaultValue={"encrypt"} name="" id="mode">
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>
                <button onClick={() => { encryptDecrypt(document.getElementById("input").value, document.getElementById("mode").value) }} type="submit">Convert</button>
            </div>
        </form>


    </main>
};

export default Baconian;
