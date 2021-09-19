function addAndRemove(commands) {
    let num = 1;
    const arr = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            arr.push(num);
        } else {
            arr.pop();
        }
        num++;
    }
   arr.length === 0 ? console.log('Empty') : console.log(arr.join('\n')) ;
}

addAndRemove(['add',
    'add',
    'add',
    'add']
);

addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
)
addAndRemove(['remove',
    'remove',
    'remove']
)