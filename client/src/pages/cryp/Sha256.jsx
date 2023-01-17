import React, { useState } from 'react'
import { useRef } from 'react';




const Sha256 = () => {
    // var crypto = Crypto();
    
    const text = useRef();
    const [shaHash, setShaHash] = useState("");
    
    const generateHash = (string) => {
        // const hash = crypto.createHash('sha256').update(string).digest('base64');
        // setShaHash(hash);
    }




    return (
        <main className='main'>

            <div className="left-section">

                <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                    <div className="input">
                        <label htmlFor="input">Enter Text</label>
                        <textarea ref={text} type="text" id="input" />
                    </div>

                    <div className="settings">
                        <button onClick={() => { generateHash(text.current.value) }} type="submit">Generate Hash</button>
                    </div>

                    <div className="output">
                        <label htmlFor="output">Output</label>
                        <textarea name="" id="" value={shaHash} onChange={(e) => {
                            setShaHash(e.target.value)
                        }} />
                    </div>

                </form>
            </div>

            <div className="right-section">
                <div className="wiki">
                    <div>
                        <h2>ROT13 </h2>
                        <h3>("rotate by 13 places", sometimes hyphenated ROT-13)</h3>
                        <p>a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. ROT13 is a special case of the Caesar cipher which was developed in ancient Rome by Julius Caesar (100 BC - 44 BC)</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Sha256