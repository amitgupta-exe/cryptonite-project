import React, { useState } from 'react'
import CryptoJS from 'crypto-js';


const BlowFish = () => {
    const [blowFishText, setBlowFishText] = useState('');

    function encryptDecrypt(text, mode, key) {

        if (mode === 'encrypt') {
            var ciperText = CryptoJS.Blowfish.encrypt(text, key).toString();
            setBlowFishText(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = CryptoJS.Blowfish.decrypt(text, key).toString(CryptoJS.enc.Utf8);
            setBlowFishText(decipherText)
        }
    }
    return (
        <main className='main'>
            <div>
                <h1>BlowFish Cipher</h1>
            </div>


            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="input-output">

                    <textarea placeholder='Input' type="text" id="input" />
                    <textarea placeholder='Output' name="" id="" value={blowFishText} onChange={(e) => {
                        setBlowFishText(e.target.value)
                    }} />
                </div>

                <div className="settings">
                    <div>
                        <p>Key (Number):</p>
                        <input   id='key' type="text" />

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
}

export default BlowFish