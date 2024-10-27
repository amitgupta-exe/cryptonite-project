import React, { useState } from 'react';

const RailFence = () => {
    const [fenceText, setFenceText] = useState("");
    const [keyValue, setKeyValue] = useState('');
const [error, setError] = useState('');

    //FUNCTION TO ENCRYPT AND DECRYPT IN RAILFENCE
    function fence(text, mode, key) {

        var fenceArray = [];

        // creating a 2d array
        for (let i = 0; i < key; i++) {
            fenceArray[i] = [];
        }

        //filling array with null values
        for (let i = 0; i < key; i++) {
            for (let j = 0; j < text.length; j++) {
                fenceArray[i][j] = null;
            }
        }

        //FOR ENCRYPTION
        if (mode === "encrypt") {

            var j = 0;
            var min = true;
            var max = false;
            //Putting the characters in diagonal of the matrix
            for (let i = 0; i < text.length; i++) {
                if (min) {
                    fenceArray[j][i] = text[i];
                    j++;
                    if (j >= key - 1) {
                        min = false;
                        max = true;
                    }
                } else if (max) {
                    fenceArray[j][i] = text[i];
                    j--;
                    if (j <= 0) {
                        min = true;
                        max = false;
                    }
                }
            }

            // console.log(fenceArray);

            // merging the arrays
            var merged = [].concat.apply([], fenceArray);
            //converting to string
            var str = "";

            for (let i = 0; i < merged.length; i++) {
                if (merged[i] != null) {
                    str += merged[i]
                }
            }
            setFenceText(str);
        }

        //FOR DECRYPTION
        else if (mode === "decrypt") {

            j = 0;
            min = true;
            max = false;
            //Putting "1" at the diagonal of the matrix
            for (let i = 0; i < text.length; i++) {
                if (min) {
                    fenceArray[j][i] = 1;
                    j++;
                    if (j >= key - 1) {
                        min = false;
                        max = true;
                    }
                } else if (max) {
                    fenceArray[j][i] = 1;
                    j--;
                    if (j <= 0) {
                        min = true;
                        max = false;
                    }
                }
            }


            // merging the arrays
            merged = [].concat.apply([], fenceArray);

            //Adding the characters where "1"
            j = 0;
            for (let i = 0; i < merged.length; i++) {
                if (merged[i] === 1) {
                    merged[i] = text[j]
                    j++;
                }

            }

            //Unmerging the matrix
            function splitToChunks(array, parts) {
                let result = [];
                for (let i = parts; i > 0; i--) {
                    result.push(array.splice(0, Math.ceil(array.length / i)));
                }
                return result;
            }

            merged = splitToChunks(merged, key);

            // console.log(merged);

            str = " ";
            j = 0;
            min = true;
            max = false;
            //adding the diagonal characters to the str string.
            for (let i = 0; i < text.length; i++) {
                if (min) {
                    str += merged[j][i];
                    j++;
                    if (j >= key - 1) {
                        min = false;
                        max = true;
                    }
                } else if (max) {
                    str += merged[j][i];
                    j--;
                    if (j <= 0) {
                        min = true;
                        max = false;
                    }
                }
            }
            setFenceText(str); //Final Decrypted Text
        }
    }


const handleKeyValueChange=(e)=>{

    const inputValue = e.target.value;

    if(!inputValue || !isNaN(inputValue)){

        setKeyValue(inputValue);
        setError('');
    }else{
        setError('Enter a Valid Number');
    }


}
    //Page
    return (
        <main className="main">

            <h1 className="title">
                RailFence Cipher
            </h1>

            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="input-output">
                    <textarea placeholder="Input"  type="number" id="input" />

                    <textarea name="" id="" placeholder="Output" value={fenceText} onChange={(e) => {
                        setFenceText(e.target.value)
                    }} />
                </div>

                <div className="settings">
                    <div>
                        <p>Key (Number):</p>
                        <input onChange={handleKeyValueChange} value={keyValue} id='key' type="text" />
                        <p>{error}</p>
                    </div>
                    <select defaultValue={"encrypt"} name="" id="mode">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                    <button onClick={() => { fence(document.getElementById("input").value, document.getElementById("mode").value, document.getElementById("key").value) }} type="submit">Convert</button>
                </div>

 

            </form>

        </main>
    )
}

export default RailFence;
