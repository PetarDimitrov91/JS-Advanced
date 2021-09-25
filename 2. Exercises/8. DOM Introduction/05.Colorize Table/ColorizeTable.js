function colorize() {
    let a = document.querySelectorAll('table tr');
    for (let i = 1; i < a.length; i += 2) {
        a[i].style.background = 'teal';
    }
}