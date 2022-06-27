exports.Tweet = {
    author: ({authorId}, args, {db}) => {
        return db.users.find((user) => user.id === authorId)
    },

    Stats: ({statId}, args, {db}) => {
        return db.stats.find((stat) => stat.id === statId)
    },
}