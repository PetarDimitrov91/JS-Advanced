function createSortedList() {

    const error = 'Index is not valid!'

    return {
        elements: [],
        size: 0,
        add(element) {
            this.elements.push(element);
            this.elements.sort((a, b) => a - b);
            this.size++;
            return element;
        },
        remove(index) {
            if (index >= this.elements.length || index < 0) {
                throw error;
            }
            let el = this.elements.splice(index, 1);
            this.elements.sort((a, b) => a - b);
            this.size--;
            return el;
        },
        get(index) {
            if (index >= this.elements.length || index < 0) {
                throw error;
            }
            return this.elements[index];
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
