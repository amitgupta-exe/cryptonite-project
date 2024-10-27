import React, { useState } from 'react'
import { useRef } from 'react';

import CryptoJS from 'crypto-js';


const Sha256 = () => {
    // var crypto = Crypto();

    const text = useRef();
    const [shaHash, setShaHash] = useState("");

    const generateHash = (string, sha) => {

        const shaFunctions = {
            '1': CryptoJS.SHA1,
            '224': CryptoJS.SHA224,
            '256': CryptoJS.SHA256,
            '384': CryptoJS.SHA384,
            '512': CryptoJS.SHA512,
            '3': CryptoJS.SHA3,
          };
        
          // Get the appropriate hashing function based on the mode
          const hashFunction = shaFunctions[sha];
        
        const hash = hashFunction(string).toString();
        setShaHash(hash);
    
    }



    return (
        <main className='main'>

            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="input-output">
                    <textarea ref={text} type="text" id="input" />
                    <textarea name="" id="" value={shaHash} onChange={(e) => {
                        setShaHash(e.target.value)
                    }} />
                </div>


                <div className="settings">
                    <select defaultValue={256} name="Sha-256" id="sha">
                        <option value="1">Sha-1</option>
                        <option value="224">Sha-224</option>
                        <option value="256">Sha-256</option>
                        <option value="384">Sha-384</option>
                        <option value="512">Sha-512</option>
                        <option value="3">Sha-3</option>
 

                    </select>
                    <button onClick={() => { generateHash(text.current.value, document.getElementById("sha").value) }} type="submit">Generate Hash</button>
                </div>
            </form>
        </main>
    )
}

export default Sha256