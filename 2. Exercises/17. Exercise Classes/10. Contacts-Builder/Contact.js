class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    set online(value) {

        if (this.titleDiv) {
            if (!value) {
                this.titleDiv.classList.remove("online");
            } else {
                this.titleDiv.classList.add("online");
            }
        }
        this._online = value;
    }

    get online() {
        return this._online;
    }

    render(id) {
        const article = document.createElement("article");

        this.titleDiv = document.createElement("div");
        this.titleDiv.classList.add("title");
        this.titleButton = document.createElement("button");
        this.titleButton.innerHTML = "&#8505";
        this.titleDiv.innerHTML = `${this.firstName} ${this.lastName}`;
        this.titleDiv.appendChild(this.titleButton);

        if (this._online) {
            this.titleDiv.classList.add("online");
        }

        this.infoDiv = document.createElement("div");
        this.infoDiv.classList.add("info");
        this.infoDiv.style.display = 'none';
        this.infoDiv.innerHTML = `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`

        this.titleButton.addEventListener('click', () => {
            this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none';
        });

        article.appendChild(this.titleDiv);
        article.appendChild(this.infoDiv);

        document.getElementById(id).appendChild(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
