use("FirstBase");

db.movies.find({
    $and: [
      { director: "Карен Шахназаров" },
      { tags: { $all: ["drama", "romance"] } }
    ]
});