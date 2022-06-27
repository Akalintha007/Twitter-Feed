const { db } = require("../db");

exports.Query = {
    Tweet: (parent, {id}, {db}) => {
      return db.tweets.find(tweet => tweet.id === id);
    },

    Tweets: (parent, {filter}, {db}) => {
      let filteredTweets = db.tweets;

      console.log(filteredTweets);

      if(filter) {
        const { limit, skip, sort_field, sort_order } = filter;
        if(skip)
          filteredTweets = filteredTweets.slice(skip);
        
        console.log(filteredTweets);

        if(limit)
          filteredTweets = filteredTweets.filter((tweet) => tweet.body.length <= limit);
        
        console.log(filteredTweets);

        if(sort_field)
        {
          filteredTweets = filteredTweets.sort(function(a,b) {
            return a.sort_field - b.sort_field
          })
          if(sort_order)
          {
            if(sort_order === 'DESC')
            filteredTweets.reverse();
          }
        }
      }

      return filteredTweets;
    },

    TweetsMeta: (parent, args, {db}) => db.meta ,

    User: (parent, {id}, {db}) => {
      return db.users.find(user => user.id === id)
    },

    Notifications: (parent, {limit}, {db}) => {
      return db.notifications.slice(0, limit);
    },

    NotificationsMeta: (parent, args, {db}) => db.meta ,
  };