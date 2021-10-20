class ChristmasDinner {
    constructor(budget) {
        if (+budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = +budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let [name, price] = product;
        if (+price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= price;
        this.products.push(name);
        return `You have successfully bought ${name}!`;
    }

    recipes(recipe) {
        let isPresent = true;
        let { recipeName, productsList } = recipe;
        productsList.forEach((product) => {
            if (!this.products.includes(product)) {
                isPresent = false;
            }
        });
        if (isPresent) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        }
        throw new Error('We do not have this product');
    }

    inviteGuests(name, dish) {
        let isPresent = false;
        this.dishes.forEach((obj) => {
            if (obj.recipeName === dish) {
                isPresent = true;
            }
        });
        if (!isPresent) {
            throw new Error('We do not have this dish');
        }
        if (name in this.guests) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let output = '';
        Object.keys(this.guests).forEach(name => {
            let dish = this.guests[name];
            let products = [];
            this.dishes.forEach((curDish) => {
                if (curDish.recipeName === dish) {
                    products = curDish.productsList;
                }
            });
            output += `${name} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        });
        return output.trim();
    }
}
