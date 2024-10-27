import React from 'react'

const RowColumnT = () => {
    return (
        <main className='main'>

            <div>
                <h1>Row Column Transposition </h1>
            </div>

            <form className="form" action="">

                <div className="input-output">
                    <textarea type="text" id="input" />
                    <textarea name="" id="" />
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

            </form>

        </main>
    )
}

export default RowColumnT