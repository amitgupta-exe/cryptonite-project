import React from 'react'

const RowColumnT = () => {
    return (
        <main className='main'>

          <h1>Currently not Working </h1>

            <div className="left-section">

                <form className="form"  action="">

                    <div className="input">
                        <label htmlFor="input">Enter Text</label>
                        <textarea  type="text" id="input" />
                    </div>

                    <div className="settings">
                        <select defaultValue={"encrypt"} name="" id="mode">
                            <option value="encrypt">Encrypt</option>
                            <option value="decrypt">Decrypt</option>
                        </select>
                        <select defaultValue={13} name="Rot-13" id="rot">

                        </select>
                        <button type="submit">Convert</button>
                    </div>

                    <div className="output">
                        <label htmlFor="output">Output</label>
                        <textarea name="" id=""   />
                    </div>

                </form>
            </div>

            <div className="right-section">
                <div className="wiki">
                    <div>
                        <h2>Row Column Transposition </h2>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default RowColumnT