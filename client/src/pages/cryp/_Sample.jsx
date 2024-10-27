import React from 'react'

const Sample = () => {
    return (
        <main className='main'>
            <div>
                <h1>Play Fair Cipher</h1>
            </div>


            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="input-output">

                    <textarea placeholder='Input' onChange={(e) => { setText(e.target.value); }} type="text" id="input" />
                    <textarea placeholder='Output' name="" id="" value={_____} onChange={(e) => {
                        setRotText(e.target.value)
                    }} />
                </div>

                <div className="settings">
                    <select defaultValue={"encrypt"} name="" id="mode">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                    <select defaultValue={13} name="Rot-13" id="rot">

                    </select>
                </div>

            </form>

        </main>
    )
}

export default Sample