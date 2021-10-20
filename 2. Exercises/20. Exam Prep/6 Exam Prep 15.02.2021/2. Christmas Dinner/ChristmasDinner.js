class ChristmasDinner {
    constructor(budget) {
        this._budget = budget
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = value;
    }

    shopping(product) {
        const productType = product[0];
        const productPrice = product[1];
        if (this.budget < productPrice) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget = this.budget - productPrice;
        this.products.push(productType);
        return `You have successfully bought ${productType}!`;
    }

    recipes(recipe) {
        // recipe format
        //   const recipe = {
        //   recipeName: string,
        //   productsList: [product,product,product]
        // };

        recipe.productsList.forEach(e => {
            if (!this.products.includes(e)) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let presentDish = false

        this.dishes.forEach(e => {
            if (e.recipeName === dish) {
                presentDish = true;
            }
        });

        if (!presentDish) {
            throw new Error('We do not have this dish');
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        const output = [];

        Object.entries(this.guests).forEach(guest => {
            let products = '';
            this.dishes.forEach(dish => {
                if (dish.recipeName === guest[1]) {
                    products = dish.productsList.join(', ');
                }
            });
            output.push(`${guest[0]} will eat ${guest[1]}, which consists of ${products}`);
        });

        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());





