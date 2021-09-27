function toggle() {

    const text = document.getElementsByClassName('button')[0].textContent;

    const transform = {
        Less() {
            document.getElementsByClassName('button')[0].textContent = 'More';
            document.getElementById('extra').style.display = 'none';
        },
        More() {
            document.getElementsByClassName('button')[0].textContent = 'Less';
            document.getElementById('extra').style.display = 'block';
        }
    };
    transform[text]();
}