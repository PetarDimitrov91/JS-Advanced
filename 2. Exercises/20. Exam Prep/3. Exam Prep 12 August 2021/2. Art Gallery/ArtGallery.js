class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        const articleToAdd = {
            articleModel,
            articleName,
            quantity
        };

        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error('This article model is not included in this gallery!');
        }

        let condition = false;

        for (const article of this.listOfArticles) {
            if (article.articleModel.toLowerCase() === articleModel.toLowerCase() && article.articleName === articleName) {
                article.quantity = article.quantity + quantity;
                condition = true;
            }
        }

        if (!condition) {
            this.listOfArticles.push(articleToAdd);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }


    inviteGuest(guestName, personality) {
        let points =
            personality === 'Vip' ? 500
                : personality === 'Middle' ? 250
                    : 50;

        const guest = {
            guestName,
            points,
            purchaseArticle: 0
        };

        this.guests.forEach(e => {
            if (e.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        });

        this.guests.push(guest);

        return `You have successfully invited ${guestName}!`;


    };

    buyArticle(articleModel, articleName, guestName) {
        let condition = false;
        let articleToPurchase;
        for (const e of this.listOfArticles) {
            if (e.articleModel.toLowerCase() === articleModel.toLowerCase() && e.articleName === articleName) {
                condition = true;
                if (e.quantity === 0) {
                    return `The ${articleName} is not available.`;
                }
                articleToPurchase = e;
            }
        }
        if (condition === false) {
            throw new Error(`This article is not found.`);
        }
        let conditionForGuest = false;
        for (const e of this.guests) {
            if (e.guestName === guestName) {
                if (e.points >= this.possibleArticles[articleModel]) {
                    e.points = e.points - this.possibleArticles[articleModel];
                    e.purchaseArticle = e.purchaseArticle + 1;
                    conditionForGuest = true;
                    for (const e1 of this.listOfArticles) {
                        if (e1 === articleToPurchase) {
                            e1.quantity = e1.quantity - 1;
                        }
                    }
                } else {

                    return `You need to more points to purchase the article.`;
                }
            }
        }
        if (condition === false) {
            return `This guest is not invited.`;
        }


        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;

    };

    showGalleryInfo(criteria) {
        const output = []
        if (criteria === 'article') {
            output.push('Articles information:');
            for (const article of this.listOfArticles) {
                output.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }

        } else if (criteria === 'guest') {
            output.push('Guests information:');
            for (const guest of this.guests) {
                output.push(`${guest.guestName} - ${guest.purchaseArticle}`)
            }
        }
        return output.join('\n');
    };
}


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Midddle');
artGallery.inviteGuest('Peter', 'Midddle');

console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



