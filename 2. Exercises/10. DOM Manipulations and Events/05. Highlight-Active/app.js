function focused() {
    Array.from(document.getElementsByTagName('input'))
        .forEach(field => {
            field.addEventListener('focus', onFocus);
            field.addEventListener('blur', onBlur);
        });

    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused');

    }

    function onBlur(ev) {
        ev.target.parentNode.classList.add('');
    }
}