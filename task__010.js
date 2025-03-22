use("FirstBase");

db.movies.aggregate([
    {
        $unwind: "$reviews"
    },
    {
        $match: {
            "reviews.phone": /5.*7/
        }
    },
    {
        $group: {
            _id: "$reviews.username",
            phone: { $first: "$reviews.phone" },
            reviewText: { $first: "$reviews.text" }
        }
    }
]);