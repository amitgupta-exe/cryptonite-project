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
    return (<main className="main">
        <h1 className="title">
            Atbash
        </h1>


        <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

            <div className="input-output">
                <textarea placeholder='Input' type="text" id="input" />
                <textarea placeholder='Output' name="" id="" value={atbashText} onChange={(e) => {
                    setatbashText(e.target.value)
                }} />
            </div>

            <div className="settings">
                <select defaultValue={"encrypt"} name="" id="mode">
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>
                <button onClick={() => { atbash(document.getElementById("input").value, document.getElementById("mode").value) }} type="submit">Convert</button>
            </div>

        </form>

    </main>
    )
};

export default Atbash;
