const {gql} = require('apollo-server');

const { GraphQLScalarType, Kind } = require('graphql');

module.exports.dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
    Date: this.dateScalar
}

exports.typeDefs = gql `
    type Tweet {
        id: ID!
        body: String
        date: Date
        read: Boolean
        author: User
        Stats: Stat
    }

    type User {
        id: ID!
        username: String
        first_name: String
        last_name: String
        full_name: String  
    }

    type Stat {
        id: ID!
        views: Int
        likes: Int
        retweets: Int
        responses: Int
    }

    type Notification {
        id: ID!
        date: Date
        type: String
    }

    type Meta {
        id: ID!
        count: Int
    }

    scalar Date

    type Query {
        Tweet(id: ID!): Tweet
        Tweets(filter: TweetFilter): [Tweet]
        TweetsMeta: [Meta]
        User(id: ID!): User
        Notifications(limit: Int): [Notification]
        NotificationsMeta: [Meta]
    }

    type Mutation {
        createTweet (
            input: createTweetInput
        ): Tweet
        deleteTweet(id: ID!): Tweet
        markTweetRead(id: ID!): Boolean
    }

    input TweetFilter {
        limit: Int
        skip: Int,
        sort_field: String,
        sort_order: String,
    }

    input createTweetInput {
        body: String
        date: Date
        read: Boolean
        authorId: ID!
        statId: ID!
    }
`