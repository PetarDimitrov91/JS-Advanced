const article = {
    articleModel: 'picture',
    articleName: 'kartina',
    quantity: 50
};

const article2 = {
    articleModel: 'photo',
    articleName: 'mount',
    quantity: 60
};

const article3 = {
    articleModel: 'photo',
    articleName: 'mount',
    quantity: 610
};

const arr = [];
arr.push(article)
arr.push(article2);

for (const arrElement of arr) {
    if(arrElement['articleModel'] === 'picture' && arrElement['articleName'] === 'kartina'){
        arrElement.quantity = 100;
        console.log(arrElement);
    }
   // for (const [key,value]  of Object.entries(arrElement)) {
   //     if(value === 'picture' && )
   // }
}