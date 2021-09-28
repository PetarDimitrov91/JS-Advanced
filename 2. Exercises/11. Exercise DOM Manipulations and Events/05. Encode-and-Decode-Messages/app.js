function encodeAndDecodeMessages() {


    document.getElementById('main').addEventListener('click', encodeDecode);


    function encodeDecode(ev) {
        if (ev.target.textContent.includes('Encode')) {
            const textArea = document.querySelectorAll('textarea');
            const input = textArea[0];
            const output = textArea[1];
            let decodedMessage = [];
            let encodedMessage = [];
            decodedMessage = input.value.split('');
            for (let i = 0; i < decodedMessage.length; i++) {
                encodedMessage.push(String.fromCharCode(decodedMessage[i].charCodeAt(0) + 1));
            }
            console.log(encodedMessage.join(''));
            output.value = encodedMessage.join('');
            input.value = '';
        } else if (ev.target.textContent.includes('Decode')) {
            const textArea = document.querySelectorAll('textarea');
            const input = textArea[0];
            const output = textArea[1];
            let decodedMessage = [];
            let encodedMessage = [];
            encodedMessage = output.value.split('');
            for (let i = 0; i < encodedMessage.length; i++) {
                decodedMessage.push(String.fromCharCode(encodedMessage[i].charCodeAt(0) - 1));
            }
            output.value = decodedMessage.join('');
        }
    }

    //take buttons

    //  const buttons = document.querySelectorAll('button');
    //  const btnEncode = buttons[0];
    //  const btnDecode = buttons[1];
//
    //  // take fields
//
    //  const textArea = document.querySelectorAll('textarea');
    //  const input = textArea[0];
    //  const output = textArea[1]
//
    //  btnEncode.addEventListener('click', encode);
    //  btnDecode.addEventListener('click', decode);
//
    //  let decodedMessage = [];
    //  let encodedMessage = [];
//
    //  function encode() {
    //      decodedMessage = input.value.split('');
    //      for (let i = 0; i < decodedMessage.length; i++) {
    //          encodedMessage.push(String.fromCharCode(decodedMessage[i].charCodeAt(0) + 1));
    //      }
    //      console.log(encodedMessage.join(''));
    //      output.value = encodedMessage.join('');
    //      input.value = '';
    //  }
//
    //  function decode() {
    //      output.value = decodedMessage.join('');
    //  }
}