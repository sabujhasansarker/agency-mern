const Review = require("../../models/Review");

const { GraphQLError } = require("graphql");

module.exports = {
   Query: {
      async getReviews() {
         try {
            const reviews = await Review.find();
            if (reviews.length >= 1) {
               return reviews;
            } else {
               throw new GraphQLError("Review not found");
            }
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
   Mutation: {
      async addReview(_, { displayName, designation, des }) {
         try {
            const newReview = new Review({
               displayName,
               designation,
               des,
            });
            await newReview.save();
            return newReview;
         } catch (err) {
            throw new GraphQLError(err.message);
         }
      },
   },
};
