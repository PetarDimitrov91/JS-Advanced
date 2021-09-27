function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let inputArr = JSON.parse(document.querySelector('textarea').value);

        const restaurants = {};

        inputArr.forEach(line => {
            line = line.match(/[^-,\s]+/g);
            let restaurantName = line.shift();
            restaurants[restaurantName] = {};
            for (let i = 0; i < line.length; i += 2) {
                let workerName = line[i];
                let workerSalary = line[i + 1];
                restaurants[restaurantName][workerName] = workerSalary;
            }

        });

        console.log(restaurants);


    }
}