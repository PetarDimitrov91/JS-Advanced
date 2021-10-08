function validate() {
    const userNamePattern = /^[A-Za-z0-9]{3,20}$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    const passwordPattern = /^[\w]{5,15}$/;

    const userNameInputRef = document.querySelector('#username');
    const emailInputRef = document.querySelector('#email');
    const passwordInputRef = document.querySelector('#password');
    const confirmPasswordInputRef = document.querySelector('#confirm-password');
    const checkboxRef = document.querySelector('#company');
    const companyInputRef = document.querySelector('#companyInfo');

    let checkBoxCondition;

    checkboxRef.addEventListener('change', () => {
        if (checkboxRef.checked) {
            companyInputRef.style.display = 'block'
            document.querySelector('#valid').style.display = 'none';
            checkBoxCondition = true;
        } else {
            companyInputRef.style.display = 'none'
            checkBoxCondition = false;
        }
    });

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    function submit(event) {
        event.preventDefault();

        function isValidUsername() {
            if (!userNamePattern.test(userNameInputRef.value)) {
                userNameInputRef.style.borderColor = 'red';
                document.querySelector('#valid').style.display = 'none';
                return false;
            }
            userNameInputRef.style.borderColor = '';
            return true;
        }

        function isValidEmail() {
            if (!emailPattern.test(emailInputRef.value)) {
                emailInputRef.style.borderColor = 'red'
                document.querySelector('#valid').style.display = 'none';
                return false;
            }
            emailInputRef.style.borderColor = ''
            return true;
        }

        function isValidPassword() {
            if (!passwordPattern.test(passwordInputRef.value)) {
                passwordInputRef.style.borderColor = 'red';
                document.querySelector('#valid').style.display = 'none';
                return false;
            }
            if (passwordInputRef.value !== confirmPasswordInputRef.value) {
                confirmPasswordInputRef.style.borderColor = 'red';
                document.querySelector('#valid').style.display = 'none';
                return false;
            }
            passwordInputRef.style.borderColor = ''
            confirmPasswordInputRef.style.borderColor = '';
            return true;
        }

        let isValidNumber;

        if (checkBoxCondition) {
            const companyNumberRef = document.querySelector('#companyNumber');
            if (Number(companyNumberRef.value) < 1000 || Number(companyNumberRef.value) > 9999) {
                companyNumberRef.style.borderColor = 'red';
                document.querySelector('#valid').style.display = 'none';
                isValidNumber = false;
            } else {
                companyNumberRef.style.borderColor = '';
                isValidNumber = true;
            }
        }

        if (isValidUsername() && isValidEmail() && isValidPassword()) {
            if (checkBoxCondition && isValidNumber) {
                document.querySelector('#valid').style.display = 'block';
            } else {
                if (checkBoxCondition && isValidNumber === false) {
                    document.querySelector('#valid').style.display = 'none';
                } else {
                    document.querySelector('#valid').style.display = 'block';

                }
            }
        }
    }
}
