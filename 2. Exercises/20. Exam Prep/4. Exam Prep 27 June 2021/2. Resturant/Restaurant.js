class Restaurant {
    constructor(budget) {
        this.budgetMoney = Number(budget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(productsArr) {
        const output = [];
        for (const product of productsArr) {
            const [productName, productQuantity, productTotalPrice] = product.split(' ');

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] = this.stockProducts[productName] + Number(productQuantity);
                    this.budgetMoney -= productTotalPrice;
                } else {
                    this.stockProducts[productName] = Number(productQuantity);
                    this.budgetMoney -= productTotalPrice;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
                output.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                output.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return output.join('\n');
    };

    addToMenu(meal, neededProductsArr, price) {
        const products = {};
        neededProductsArr.forEach(e => {
            let [name, quantity] = e.split(' ');
            products[name] = quantity;
        });

        if (!this.menu[meal]) {
            this.menu[meal] = {
                products,
                price
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }

        const menuSize = Object.keys(this.menu).length;

        if (menuSize === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else if (menuSize === 0 || menuSize > 1) {
            return `Great idea! Now with the ${meal} we have ${menuSize} meals in the menu, other ideas?`
        }


    };

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        const output = [];
        for (const menuKey in this.menu) {
            output.push(`${menuKey} - $ ${this.menu[menuKey].price}`)
        }
        return output.join('\n');
    };

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        for (const key in this.menu[meal].products) {
            if (!this.stockProducts[key] || this.stockProducts[key] < this.menu[meal].products[key]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (const product in this.menu[meal].products) {
            this.stockProducts[product] = this.stockProducts[product] - this.menu[meal].products[product];
        }
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    };
}


let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.history);


