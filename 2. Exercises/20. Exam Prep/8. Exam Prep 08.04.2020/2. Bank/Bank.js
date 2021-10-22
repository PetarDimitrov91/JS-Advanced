class Bank {
    //#bankName
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const customerToReturn = Object.assign(customer);

        for (const client of this.allCustomers) {
            if (customer.firstName === client.firstName && customer.lastName === client.lastName && customer.id === client.id) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
            }
        }

        this.allCustomers.push(customer);

        return customerToReturn;
    }

    depositMoney(personalId, amount) {
        let isFound = false;
        for (const client of this.allCustomers) {
            if (client.personalId === personalId) {

                if (client.transactions === undefined && client.totalMoney === undefined) {
                    client.transactions = [];
                    client.totalMoney = 0;
                }
                client.totalMoney = client.totalMoney + amount;
                const transactionMessage = `${client.firstName} ${client.lastName} made deposit of ${amount}$!`;
                client.transactions.push(transactionMessage);
                isFound = true;
                return `${client.totalMoney}$`
            }
        }

        if (isFound === false) {
            throw new Error('We have no customer with this ID!');
        }
    }

    withdrawMoney(personalId, amount) {
        let isFound = false;
        for (const client of this.allCustomers) {
            if (client.personalId === personalId) {
                if (client.totalMoney < amount) {
                    throw new Error(`${client.firstName} ${client.lastName} does not have enough money to withdraw that amount!`)
                }
                client.totalMoney = client.totalMoney - amount;
                client.transactions.push(`${client.firstName} ${client.lastName} withdrew ${amount}$!`)
                return `${client.totalMoney}$`;
            }
        }
        if (isFound === false) {
            throw new Error('We have no customer with this ID!')
        }
    }

    customerInfo(personalId) {
        let isFound = false;
        for (const client of this.allCustomers) {
            if (client.personalId === personalId) {
                isFound = true;
                let output = [];

                output.push(`Bank name: ${this._bankName}`);
                output.push(`Customer name: ${client.firstName} ${client.lastName}`);
                output.push(`Customer ID: ${client.personalId}`);
                output.push(`Total Money: ${client.totalMoney}$`);
                output.push(`Transactions:`);

                for (let i = client.transactions.length; i >= 1; i--) {
                    output.push(`${i}. ${client.transactions[i - 1]}`)
                }
                return output.join('\n');
            }
        }

        if (isFound === false) {
            throw new Error('We have no customer with this ID!')
        }
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));


bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
