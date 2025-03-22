use("FirstBase");

db.movies.aggregate([
    {
        $unwind: "$reviews"
    },
    {
        $match: {
            $and: [
                { "reviews.email": /@example\.com$/ },
                { "reviews.text": /фильм/ }
            ]
        }
    },
    {
        $group: {
            _id: "$reviews.username",
            email: { $first: "$reviews.email" },
            reviewText: { $first: "$reviews.text" }
        }
    }
]);