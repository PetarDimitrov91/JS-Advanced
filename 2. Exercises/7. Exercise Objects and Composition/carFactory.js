/**
 *
 * @param {object} obj
 */

function order(obj) {

    const storage = {
        smallEngine: {
            power: 90,
            volume: 1800
        },
        normalEngine: {
            power: 120,
            volume: 2400
        },
        monsterEngine: {
            power: 200,
            volume: 3500
        },
        carriage: {
            hatchback: {
                type: 'hatchback'
            },
            coupe: {
                type: 'coupe'
            }
        }
    };

    let soldEngine = () => {
        if (obj.power <= 90) {
            return storage.smallEngine;
        } else if (obj.power <= 120) {
            return storage.normalEngine;
        } else {
            return storage.monsterEngine;
        }
    };

    let carriage = () => {
        if (obj.carriage === 'hatchback') {
            storage.carriage.hatchback.color = obj.color;
            return storage.carriage.hatchback;
        } else {
            storage.carriage.coupe.color = obj.color;
            return storage.carriage.coupe;
        }

    };

    const wheels = () => {
        let wheel = obj.wheelsize;
        if (obj.wheelsize % 2 === 0) {
            wheel -= 1;
        }
        return [wheel, wheel, wheel, wheel];
    };


    return {
        model: obj.model,
        engine: soldEngine(),
        carriage: carriage(),
        wheels: wheels()
    };
}

console.log(order({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(order({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));