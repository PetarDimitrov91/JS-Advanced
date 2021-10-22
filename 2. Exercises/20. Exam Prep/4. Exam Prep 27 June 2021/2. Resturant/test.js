class Something {#
    property;

    constructor() {
        this.#property = "test";
    }



    #
    privateMethod() {
        return 'hello world';
    }

    getPrivateMessage() {
        return this.#property;
    }
}

const instance = new Something();

console.log(instance.getPrivateMessage()); //=> test