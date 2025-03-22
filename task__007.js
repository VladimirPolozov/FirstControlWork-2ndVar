use("FirstBase");

db.movies.aggregate([
    {
        $addFields: {
            averageRate: { $avg: "$reviews.rating" }
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            director: 1,
            premiereDateInRussia: {
                $dateToString: {
                    format: "%Y-%m-%d",
                    date: "$premiereDateInRussia"
                }
            },
            averageRate: 1
        }
    }
]);