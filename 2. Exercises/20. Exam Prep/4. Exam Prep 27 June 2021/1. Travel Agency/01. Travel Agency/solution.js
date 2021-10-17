window.addEventListener('load', solution);

function solution() {

    //input references
    const nameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');

    //btn ref
    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    //unorderedList ref
    const ulRef = document.getElementById('infoPreview');

    //add event listener to the submitBtn
    submitBtn.addEventListener('click', submit);

    function submit() {
        //take the value from references and validate it
        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            return;
        }
        //create a li elements and append it to the ul
        const inputArr = Array.from(document.querySelectorAll('input'));
        const inputValues = inputArr.map(e => e.value);
        const labels = Array.from(document.querySelectorAll('label'));

        for (let i = 0; i < 5; i++) {
            if(inputValues[i]){
            let element = document.createElement('li');
            element.textContent = labels[i].textContent + ' ' + inputArr[i].value;
            ulRef.appendChild(element);
            }
        }
        // clear the input

        for (let i = 0; i < 5; i++) {
            inputArr[i].value = '';
        }

        //disable the submit btn and enable the editBtn and continueBtn
        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        //add event listeners editBtn and continueBtn
        continueBtn.addEventListener('click', continueAhead);
        editBtn.addEventListener('click', edit.bind(null,inputValues));
    }

    function continueAhead(e) {
        //when the continueBtn is clicked remove everything and add h3 tag
        Array.from(document.getElementById('block').children).forEach(e => {
            e.remove();
        });
        const el = document.createElement('h3');
        el.textContent = "Thank You For Your Reservation!";
        document.getElementById('block').appendChild(el);
    }

    function edit(inputValues) {
        //when the editBtm is clicked return all fields in the input to change it, disable the editBtn and continueBtn
        const inputArr = Array.from(document.querySelectorAll('input'));
        const liElements = Array.from(document.querySelectorAll('li'));
        for (let i = 0; i < liElements.length; i++) {
            inputArr[i].value = inputValues[i];
            liElements[i].remove();
        }
        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
    }
}

