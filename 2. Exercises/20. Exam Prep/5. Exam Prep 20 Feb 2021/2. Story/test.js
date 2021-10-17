const comment = {
    id: 1,
    username: 'Petar',
    content: 'durabureafdafsf',
    replies: {
        data: [
            {
                id: 1,
                username: 'ivan',
                content: 'sdasdasdasdasd'
            },
            {
                id: 2,
                username: 'Some',
                content: 'sdasdasdasdasd'
            }
        ]

    }
}
console.log(comment.replies.data[0].id)