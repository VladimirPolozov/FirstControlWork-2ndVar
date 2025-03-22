use("FirstBase");

db.movies.aggregate([
    {
        $match: {
            premiereDateInRussia: {
                $gte: ISODate("1986-01-01"),
                $lte: ISODate("1986-12-31")
            }
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            director: 1,
            firstTag: { $arrayElemAt: ["$tags", 0] }
        }
    }
]);