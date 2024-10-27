import React, {useState} from 'react'

const MorseCode = () => {

    const [morseText, setMorseText] = useState('');

    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
        'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', ' ': '/'
    };

    const reverseMorseCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));

    // Function to encode text to Morse code
    function encryptDecrypt(text, mode) {
        //Cipher Decipher
        if (mode === 'encrypt') {
            var ciperText = text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
            setMorseText(ciperText);
        } else if (mode === 'decrypt') {
            var decipherText = text.split(' ').map(code => reverseMorseCodeMap[code] || '').join('');
            setMorseText(decipherText)
        }
    }

    return (
        <main className='main'>
            <div>
                <h1>Morse Code</h1>
            </div>


            <form className="form" onSubmit={(e) => { e.preventDefault(); }} action="">

                <div className="input-output">

                    <textarea placeholder='Input' type="text" id="input" />
                    <textarea placeholder='Output' name="" id="" value={morseText} onChange={(e) => {
                        setMorseText(e.target.value)
                    }} />
                </div>

                <div className="settings">
                    <select defaultValue={"encrypt"} name="" id="mode">
                        <option value="encrypt">Encrypt</option>
                        <option value="decrypt">Decrypt</option>
                    </select>
                    <button onClick={() => { encryptDecrypt(document.getElementById("input").value, document.getElementById("mode").value)  }} type="submit">Convert</button>

                </div>

            </form>

        </main>
    )
}

export default MorseCode