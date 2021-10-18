function solution() {
    const inputRef = document.querySelector('section div input');
    const addBtn = document.querySelector('section div button');
    const [listOfGifts, sentGifs, discardedGifs] = document.querySelectorAll('section ul');

    addBtn.addEventListener('click', addGift);

    function addGift() {
        if (!inputRef.value.trim()) {
            inputRef.value = '';
            return;
        }
        const giftName = inputRef.value;
        inputRef.value = '';

        const liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = giftName;

        const sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';

        const discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';

        liElement.appendChild(sendBtn)
        liElement.appendChild(discardBtn);
        listOfGifts.appendChild(liElement);

        if (listOfGifts.children.length > 1) {
            sort();
        }

        sendBtn.addEventListener('click', send.bind(null, sendBtn, discardBtn, sendBtn.parentNode));
        discardBtn.addEventListener('click', discard.bind(null, sendBtn, discardBtn, discardBtn.parentNode));
    }

    function send(sendBtn, discardBtn, li) {
        sendBtn.remove()
        discardBtn.remove();
        const sentGiftLi = document.createElement('li');
        sentGiftLi.classList.add('gift');
        sentGiftLi.textContent = li.textContent;
        li.remove();
        sentGifs.appendChild(sentGiftLi);
    }

    function discard(sendBtn, discardBtn, li) {
        sendBtn.remove()
        discardBtn.remove();
        const sentGiftLi = document.createElement('li');
        sentGiftLi.classList.add('gift');
        sentGiftLi.textContent = li.textContent;
        li.remove();
        discardedGifs.appendChild(sentGiftLi);
    }

    function sort() {
        let allLiElements = Array.from(listOfGifts.querySelectorAll('li'));
        let sortedElements = allLiElements.sort((a, b) => a.innerText.localeCompare(b.innerText));

        for (let i = 0; i < sortedElements.length; i++) {
            allLiElements[i].remove();
            listOfGifts.appendChild(sortedElements[i]);
        }
    }
    const x = () => {
      //test to commit//
    }
}