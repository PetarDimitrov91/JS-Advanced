let arr = [
    {
        name: 'Petar',
        family: 'Dimitrov',
        id: '12443432'
    },

    {
        name: 'Petaradasd',
        family: 'Dimitrovasdasd',
        id: '12443432353524'
    },
    {
        name: 'Petar',
        family: 'Dimitrov342342',
        id: '12443432'
    }
]
let obj = {
    name: 'Petar',
    family: 'Dimitrov',
    id: '12443432'
};

for (const arrElement of arr) {
    if (arrElement.name === obj.name && arrElement.family === obj.family && arrElement.id === obj.id) {
        console.log(true);
    }
}