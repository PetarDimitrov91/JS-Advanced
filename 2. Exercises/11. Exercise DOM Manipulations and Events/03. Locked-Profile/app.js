function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => {
            button.addEventListener('click', showMore);
        });


    function showMore(ev) {
        const btn = ev.target;
        const profile = btn.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (btn.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                btn.textContent = 'Hide it';
            } else if (btn.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
}