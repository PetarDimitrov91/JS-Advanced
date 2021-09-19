function sort(arr) {
    arr.sort((a, b) => {
        let res = a.length - b.length;
        if (res === 0) {
            res = a.localeCompare(b);
        }
        return res;
    });
    console.log(arr.join('\n'));
}

sort(['alpha',
    'beta',
    'gamma']
);

sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

sort(['test',
    'Deny',
    'omen',
    'Default']
);