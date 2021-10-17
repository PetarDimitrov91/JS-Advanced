class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.id = 1;
        this.repliesId = 1;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }

    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        } else if (this.creator === username) {
            throw new Error('You can\'t like your own story!');
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (this._likes.includes(username)) {
            const indexToDelete = this._likes.indexOf(username);
            this._likes.splice(indexToDelete, 1);
            return `${username} disliked ${this.title}`
        } else {
            throw new Error('You can\'t dislike this story!');
        }
    }

    comment(username, content, id) {
        let noComment = true
        let anotherCondition = false;

        for (const comment of this._comments) {
            if (comment.id === id) {
                noComment = false;
            }
            comment.replies.data.forEach(e => {
                if(e.id === undefined){
                    anotherCondition = true;
                }
            })
        }
        if (noComment === false && anotherCondition === true) {
            this.repliesId = 1;
        }

        if (id === undefined || noComment) {
            id = this.id++;
            const com = {
                id: id,
                username: username,
                content: content,
                replies: {
                    data: []
                }
            }
            this._comments.push(com);
            return `${username} commented on ${this.title}`;
        } else {
            for (const comment of this._comments) {
                if (comment.id === id) {

                    if(comment.replies.data.length === 0){
                        this.repliesId = 1;

                    }
                    let repliesId = this.repliesId++;
                    const reply = {
                        id: repliesId,
                        username: username,
                        content: content
                    }
                    comment.replies.data.push(reply);
                }
            }
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        const output = [];
        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this._likes.length}`);
        output.push(`Comments:`);

        if (sortingType === 'asc') {
            this._comments.sort((a, b) => {
                return a.id - b.id;
            });
            this._comments.forEach(e => {
                e.replies.data.sort((a, b) => a.id - b.id);
            });

        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => {
                return b.id - a.id;
            });
            this._comments.forEach(e => {
                e.replies.data.sort((a, b) => b.id - a.id);
            });

        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => {
                return a.username.localeCompare(b.username);
            });
            this._comments.forEach(e => {
                e.replies.data.sort((a, b) => a.username.localeCompare(b.username));
            });
        }

        this._comments.forEach(e => {
            output.push(`-- ${e.id}. ${e.username}: ${e.content}`);
            e.replies.data.forEach(e2 => {
                output.push(`--- ${e.id}.${e2.id}. ${e2.username}: ${e2.content}`)
            })
        })
        return output.join('\n');
    }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));
console.log(art.comment("Zane", "Reply", 1));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 1));

console.log(art.toString('username'));


