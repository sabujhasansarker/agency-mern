const Review = require("../../models/Review");

const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getReviews() {
         try {
            const reviews = await Review.find();
            if (reviews) {
               return reviews;
            } else {
               throw new GraphQLError("Review not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
