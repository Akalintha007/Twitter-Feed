// const { v4: uuid } = require('uuid')

// exports.Mutation = {
//     createTweet: (parent, {input}, {db}) => {
//         const { body, read, authorId, statId, metaId} = input
//         const newTweet = {
//             id: uuid(),
//             body,
//             read,
//             authorId,
//             statId,
//             metaId
//         }

//         db.tweets.push(newTweet);
//         return newTweet;
//     },

//     deleteTweet: (parent, {id}, {db}) => {
//         const tweet = db.tweets.find((tweet) => tweet.id === id)
//         db.tweets = db.tweets.filter((tweet) => tweet.id !== id)
//         return tweet;
//     },

//     markTweetRead: (parent, {id}, {db}) => {
//         const index = db.tweets.findIndex(tweet => tweet.id === id);
//         if(index === -1)
//         return false;
//         db.tweets[index] = {
//             ...db.tweets[index],
//             read: !read,
//         };

//         return true;
//     }


// }

const { v4: uuid } = require('uuid')

exports.Mutation = {
    createTweet: (parent, {input}, {db}) => {
        const { body, read, authorId, statId, metaId} = input
        const newTweet = {
            id: uuid(),
            body,
            read,
            authorId,
            statId,
            metaId
        }

        db.tweets.push(newTweet);
        return newTweet;
    },

    deleteTweet: (parent, {id}, {db}) => {
        const tweet = db.tweets.find((tweet) => tweet.id === id)
        db.tweets = db.tweets.filter((tweet) => tweet.id !== id)
        return tweet;
    },

    markTweetRead: (parent, {id}, {db}) => {
        let temp = false;
        const index = db.tweets.findIndex(tweet => tweet.id === id);
        if(index === -1)
        return false;

        if(db.tweets[index].read == false)
        temp=true;

        db.tweets[index] = {
            ...db.tweets[index],
            read: temp,
        };

        return true;
    }


}