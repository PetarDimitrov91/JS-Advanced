function solve() {
    //take needed references

    const authorRef = document.getElementById('creator');
    const titleRef = document.getElementById('title');
    const categoryRef = document.getElementById('category');
    const contentRef = document.getElementById('content');
    const sectionPostsRef = document.querySelector('main section');
    const createBtn = document.getElementsByClassName('btn create')[0];


    // no validation needed, eventually the input must be a non empty string
    // add event listener to the createBtn
    createBtn.addEventListener('click', createArticle);


    function createArticle(event) {
        // prevent default in the function on createBtn
        event.preventDefault();
        // create article element with a factory function append it in the section with the tag h2 posts
        const article = create('article', {},
            create('h1', {}, titleRef.value),
            create('p', {}, 'Category: ', create('strong', {}, categoryRef.value)),
            create('p', {}, 'Creator: ', create('strong', {}, authorRef.value)),
            create('p', {}, contentRef.value),
            // create('button', {className: 'btn delete'}, 'Delete'),
            //create('button', {className: 'btn archive',}, 'Archive')
        );

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('delete')
        deleteBtn.textContent = 'Delete';

        const archiveBtn = document.createElement('button');
        archiveBtn.classList.add('btn');
        archiveBtn.classList.add('archive')
        archiveBtn.textContent = 'Archive';

        const div = create('div', {className: 'buttons'});
        div.appendChild(deleteBtn);
        div.appendChild(archiveBtn);
        article.appendChild(div);

        sectionPostsRef.appendChild(article);

        // const deleteBtn = document.getElementsByClassName('btn delete')[0];
        // const archiveBtn = document.getElementsByClassName('btn archive')[0];

        deleteBtn.addEventListener('click', deleteArticle.bind(null, deleteBtn));
        archiveBtn.addEventListener('click', archiveArticle.bind(null, archiveBtn));
    }

    // create new event listeners for the new buttons

    function deleteArticle(deleteBtn, event) {
       deleteBtn.parentNode.parentNode.remove();
    }

    function archiveArticle(archiveBtn, event) {
        // archiveBtn must archive the article in the archive section and delete it from the section
       const title = archiveBtn.parentNode.parentNode.children[0].textContent;
        const archiveElement = document.createElement('li');
        archiveElement.textContent = title;
        document.getElementsByTagName('ol')[0].appendChild(archiveElement);
        archiveBtn.parentNode.parentNode.remove();

        //sort the elements

        let list,i,switching,b, shouldSwitch;
        list = document.getElementsByTagName('ol')[0];
        switching = true;
        while (switching){
            switching = false;
            b = list.getElementsByTagName('li');
            for (i = 0; i < (b.length - 1) ; i++) {

                shouldSwitch = false;

                if(b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
            if(shouldSwitch){
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
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
