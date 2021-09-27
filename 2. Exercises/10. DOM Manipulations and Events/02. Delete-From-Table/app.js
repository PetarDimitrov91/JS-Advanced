function deleteByEmail() {

    const input = document.querySelector('input[name="email"]');
    const rows = Array.from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent == input.value);

    rows.forEach(r => r.remove());

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found';
}