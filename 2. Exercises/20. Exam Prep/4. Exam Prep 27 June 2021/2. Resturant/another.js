class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let p of products) {
            const [name, quantity, price] = p.split(' ');

            if (this.budgetMoney >= Number(price)) {
                if (!this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += Number(quantity);
                this.budgetMoney -= Number(price);
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`
        }

        const products = {};

        for (let i = 0; i < neededProducts.length; i++) {
            const [product, quantity] = neededProducts[i].split(' ');
            products[product] = Number(quantity);
        }

        const newMeal = {
            neededProducts: products,
            price
        }

        this.menu[meal] = newMeal;

        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
    }

    showTheMenu() {
        if (Object.entries(this.menu).length == 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        const output = [];

        for (let p of Object.entries(this.menu)) {
            output.push(`${p[0]} - $ ${p[1].price}`);
        }

        return output.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        const needed = Object.assign({}, this.menu[meal].neededProducts);

        for (const product in this.menu[meal].neededProducts) {
            if (this.stockProducts[product] < needed[product] || !this.stockProducts[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

        for (const product in needed) {
            this.stockProducts[product] -= needed[product]
        }

        this.budgetMoney += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}