use("FirstBase");

db.movies.aggregate([
    {
        $addFields: {
            reviewCount: { $size: "$reviews" }
        }
    },
    {
        $match: {
            reviewCount: { $gte: 2 }
        }
    },
    {
        $project: {
            reviewCount: 0
        }
    }
]);