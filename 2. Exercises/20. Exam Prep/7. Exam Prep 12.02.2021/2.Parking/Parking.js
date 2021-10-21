class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({carModel, carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let isFound = false;
        let vehicleIndex;
        for (const vehicle of this.vehicles) {
            if (vehicle.carNumber === carNumber) {
                isFound = true;
                vehicleIndex = this.vehicles.indexOf(vehicle);
                if (vehicle.payed === false) {
                    throw new Error(`${vehicle.carNumber} needs to pay before leaving the parking lot.`);
                }
                break;
            }
        }
        if (isFound === false) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        this.vehicles.splice(vehicleIndex, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let isFound = false;
        for (const vehicle of this.vehicles) {
            if (vehicle.carNumber === carNumber) {
                isFound = true;
                if (vehicle.payed === true) {
                    throw new Error(`${carNumber}'s driver has already payed his ticket.`);
                } else {
                    vehicle.payed = true;
                    return `${vehicle.carNumber}'s driver successfully payed for his stay.`;
                }
            }
        }
        if (isFound === false) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
    }

    getStatistics(carNumber) {
        let output = [];

        if (carNumber === undefined) {
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            output.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
            for (const vehicle of this.vehicles) {
                let payedStatus = vehicle.payed ? 'Has payed' : 'Not payed';
                output.push(`${vehicle.carModel} == ${vehicle.carNumber} - ${payedStatus}`);
            }
        } else {
            for (const vehicle of this.vehicles) {
                if (vehicle.carNumber === carNumber) {
                    let payedStatus = vehicle.payed ? 'Has payed' : 'Not payed';
                    output.push(`${vehicle.carModel} == ${vehicle.carNumber} - ${payedStatus}`);
                }
            }
        }
        return output.join('\n').trim();
    }
}

const parking = new Parking(43);

console.log(parking.addCar("Mercedes", "TX3691CA"));
console.log(parking.pay('TX3691CA'));
console.log(parking.addCar("Opel", "TX3691"));
console.log(parking.addCar("Vectra", "T691CA"));
console.log(parking.addCar("Astra", "TX691CA"));
console.log(parking.addCar("AAScona", "TX3A"));
console.log(parking.getStatistics());


console.log(parking.removeCar('TX3691CA'));


console.log(parking.getStatistics('T691CA'));

