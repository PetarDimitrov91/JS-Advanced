function solve() {
    // select the needed References
    const lectureNameRef = document.getElementsByTagName('input')[0];
    const dateRef = document.getElementsByTagName('input')[1];
    const moduleRef = document.querySelector('.form-control select');
    const addBtnRef = document.querySelector('.form-control button');
    const trainingsDivRef = document.getElementsByClassName('modules')[0];

    // attach event listener to the and prevent the default behaviour of the browser
    addBtnRef.addEventListener('click', add);

    function add(event) {
        event.preventDefault();
        // validate the input
        if (lectureNameRef.value.trim() === '' || dateRef.value === '' || moduleRef.value === 'Select module') {
            return;
        }
        //* create a new element and attach it
        // -> check if module is listened
        const allModules = Array.from(document.querySelectorAll('.modules .module h3'));
        let isAddedModule = false;

        allModules.forEach(e => {
            if (e.textContent.includes(moduleRef.value.toUpperCase() + '-MODULE')) {
                isAddedModule = true;
            }
        });

        //2021-10-20T20:14 -> it comes in this format
        //2020/09/28 - 18:00 -> i need these format
        //on split -> [ '2021', '10', '20', '20:14' ]

        const [year, month, day, hour] = dateRef.value.toString().split(/[-T]/);

        let dateOutput = `${lectureNameRef.value} - ${year}/${month}/${day} - ${hour}`;


        if (isAddedModule === false) {
            //creating elements
            const fullDivElement = create('div', {className: 'module'},
                create('h3', {}, moduleRef.value.toUpperCase() + '-MODULE'),
                create('ul', {},
                    create('li', {className: 'flex'},
                        create('h4', {}, dateOutput),
                        create('button', {className: 'red'}, 'Del')
                    )
                ));
            trainingsDivRef.appendChild(fullDivElement);
        } else {
            //creating elements
            const onlyLiElement = create('li', {className: 'flex'},
                create('h4', {}, dateOutput),
                create('button', {className: 'red'}, 'Del')
            );
            allModules.forEach(e => {
                if (e.textContent.includes(moduleRef.value.toUpperCase() + '-MODULE')) {
                    e.nextSibling.appendChild(onlyLiElement);
                }
            });
        }
        // sort the elements by DATA element -> note not by sting
        sort(allModules);

        //* add event listener to the newly created button
        trainingsDivRef.addEventListener('click', deleteList);
    }

    // a.querySelector('h4').textContent.localeCompare(b.querySelector('h4').textContent)

    function sort(allModules) {
        allModules.forEach(e => {
            if (e.textContent.includes(moduleRef.value.toUpperCase() + '-MODULE')) {
                const currentLiRef = Array.from(e.nextElementSibling.childNodes);

                const sortedList = currentLiRef.sort((a, b) => {

                    let firstDateText = a.querySelector('h4').textContent;
                    let FDT = firstDateText.substring(firstDateText.indexOf('-') + 2, firstDateText.length).replace(' - ', '/');
                    let [year, month, date, hours, minutes] = FDT.split(/[\/\-:}]/);
                    let firstDate = new Date(Number(year), Number(month), Number(date), Number(hours), Number(minutes));

                    let secondDateText = b.querySelector('h4').textContent;
                    let SDT = secondDateText.substring(secondDateText.indexOf('-') + 2, secondDateText.length).replace(' - ', '/');
                    let [yearSecond, monthSecond, dateSecond, hoursSecond, minutesSecond] = SDT.split(/[\/\-:}]/);
                    let secondDate = new Date(Number(yearSecond), Number(monthSecond), Number(dateSecond), Number(hoursSecond), Number(minutesSecond));

                    return firstDate.getTime() - secondDate.getTime();

                });
                for (let i = 0; i < currentLiRef.length; i++) {
                    currentLiRef[i].remove();
                    e.nextElementSibling.appendChild(sortedList[i]);
                }
            }
        });
    }

    function deleteList(event) {
        if (event.target.textContent === 'Del') {
            if (event.target.parentNode.parentNode.childElementCount === 1) {
                event.target.parentNode.parentNode.parentNode.remove();
            } else {
                event.target.parentNode.remove();
            }
        }
    }

    function create(type, attributes, ...content) {
        let element = document.createElement(type);

        for (const prop in attributes) {
            element[prop] = attributes[prop];
        }

        for (let contentElement of content) {
            if (typeof contentElement === 'string' || typeof contentElement === 'number') {
                contentElement = document.createTextNode(contentElement)
            }
            element.appendChild(contentElement);
        }
        return element;
    }
}


