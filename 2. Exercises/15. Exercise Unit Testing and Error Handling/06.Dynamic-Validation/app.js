function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', () => {
        const pattern = (/^[a-z]+@[a-z]+\.[a-z]+/gm);
        if (pattern.test(emailInput.value)) {
            emailInput.value = '';
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
            emailInput.value = '';
        }
    });
}