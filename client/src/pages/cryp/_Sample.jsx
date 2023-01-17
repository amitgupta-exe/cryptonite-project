import React from 'react'

const Sample = () => {
    return (
        <main className='main'>

            <div className="left-section">

                <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                    <div className="input">
                        <label htmlFor="input">Enter Text</label>
                        <textarea onChange={(e) => { setText(e.target.value); }} type="text" id="input" />
                    </div>

                    <div className="settings">
                        <select defaultValue={"encrypt"} name="" id="mode">
                            <option value="encrypt">Encrypt</option>
                            <option value="decrypt">Decrypt</option>
                        </select>
                        <select defaultValue={13} name="Rot-13" id="rot">

                        </select>
                        <button onClick={() => { _____}} type="submit">Convert</button>
                    </div>

                    <div className="output">
                        <label htmlFor="output">Output</label>
                        <textarea name="" id="" value={_____} onChange={(e) => {
                            setRotText(e.target.value)
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

export default Sample