function solve() {
    //1. taking references
    //-- AddTask
    const taskInputRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');
    const addBtn = document.getElementById('add');
    //open section
    const openSectionRef = document.querySelector('h1.orange').parentNode.parentNode.children[1];
    //in progress section
    // const inProgressRef = document.querySelector('h1.yellow').parentNode.parentNode.children[1];
    const inProgressRef = document.getElementById('in-progress');
    // complete section
    const completeRef = document.querySelector('h1.green').parentNode.parentNode.children[1];

    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (!taskInputRef.value.trim() || !descriptionRef.value.trim() || !dateRef.value.trim()) {
            return;
        }

        let element = create('article', {},
            create('h3', {}, taskInputRef.value),
            create('p', {}, `Description: ${descriptionRef.value}`),
            create('p', {}, `Due Date: ${dateRef.value}`),
            create('div', {className: 'flex'},
                create('button', {className: 'green'}, 'Start'),
                create('button', {className: 'red'}, 'Delete')
            )
        );
        openSectionRef.appendChild(element);

        document.getElementsByClassName('wrapper')[0].addEventListener('click', changeContent);
    }


    function changeContent(event) {
        if (event.target.textContent === 'Start') {
            startTask(event.target);
        } else if (event.target.textContent === 'Delete') {
            deleteTask(event);
        } else if (event.target.textContent === 'Finish') {
            finishTask(event);
        }
    }

    function startTask(eventTarget) {
        const elementToChange = eventTarget.parentNode.parentNode;
        inProgressRef.appendChild(elementToChange);
        const buttons = Array.from(elementToChange.querySelectorAll('button'));
        buttons[0].textContent = 'Delete';
        buttons[0].classList.remove('green');
        buttons[0].classList.add('red');
        buttons[1].textContent = 'Finish';
        buttons[1].classList.remove('red');
        buttons[1].classList.add('orange');

        //  buttons[0].addEventListener('click', deleteTask);
        //  buttons[1].addEventListener('click', finishTask);

    }

    function deleteTask(eventTarget) {
        eventTarget.target.parentNode.parentNode.remove();
    }

    function finishTask(event) {
        const finishedTask = event.target.parentNode.parentNode;
        Array.from(finishedTask.childNodes)[3].remove();
        completeRef.appendChild(finishedTask);

    }

    function create(type, attr, ...content) {
        const element = document.createElement(type);

        for (const prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}