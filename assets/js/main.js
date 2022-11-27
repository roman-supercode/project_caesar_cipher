const output = document.getElementById("output");

const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];


function caesarShift() {

    // Zugriff auf die Elemente bzw. Values
    const inputText = document.getElementById("userInput").value;
    const shiftKey = document.getElementById("shiftKey").valueAsNumber;
    const cipher = document.getElementById("kodierung").checked;


    // Bedingung für den Input-field
    if (!inputText) {
        return alert('Bitte eine Eingabe tätigen');
    }
    // Bedingung für den Schlüssel
    if (shiftKey > 26 || !shiftKey) {
        return alert('Benutze einen Schlüsselwert zwischen 0 und 26');
    }

    // Input in Kleinbuchstaben konvertieren
    const inputTextToLowerCase = inputText.toLowerCase();

    // Platzhalter Array für die Buchstaben (nach verschiebung durch den Schlüsselwert)
    let cryptedText = [];

    // Validierung des radio-buttons
    if (cipher) {
        verschlüsseln();
    } else {
        entschlüsseln();
    }
    // Verschlüsseln und in cryptedText pushen
    // Zwei Schleifen und eine Bedingung für den Vergleich der Buchstaben aus Input-field und alphabet array
    function verschlüsseln() {
        for (let i = 0; i < inputText.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputTextToLowerCase[i] === alphabet[j]) {
                    if (j + shiftKey <= 26) {
                        cryptedText.push(alphabet[j + shiftKey]);
                        // console.log(alphabet[j + shiftKey]);
                    } else {
                        cryptedText.push(alphabet[j + shiftKey - 26]);
                        // console.log(alphabet[j + shiftKey - 26]);
                    }
                }
            }
        }
        // Beschreibe das output Element (Array zu String ohne Kommas konvertiren, in Großbuchstaben)
        output.textContent = cryptedText.join("").toUpperCase();
    }

    // Entschlüsseln
    function entschlüsseln() {
        for (let i = 0; i < inputText.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputTextToLowerCase[i] === alphabet[j]) {
                    if (j - shiftKey <= 26) {
                        cryptedText.push(alphabet[j - shiftKey]);
                        // console.log(alphabet[j - shiftKey]);
                    } else {
                        cryptedText.push(alphabet[j - shiftKey + 26]);
                        // console.log(alphabet[j - shiftKey + 26]);
                    }
                }
            }
        }
        output.textContent = cryptedText.join("").toUpperCase();
    }
    // Reset Input-field
    document.getElementById("userInput").value = "";
}
