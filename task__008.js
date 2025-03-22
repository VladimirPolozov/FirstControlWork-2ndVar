use("FirstBase");

db.movies.aggregate([
    {
        $unwind: "$reviews"
    },
    {
        $group: {
            _id: "$reviews.username",
            reviewCount: { $sum: 1 },
            averageRating: { $avg: "$reviews.rating" }
        }
    },
    {
        $project: {
            _id: 0,
            username: "$_id",
            reviewCount: 1,
            averageRating: 1
        }
    }
]);