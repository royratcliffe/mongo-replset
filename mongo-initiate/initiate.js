rs.initiate(
  {
    _id: "rs0",
    version: 1,
    members: [
      { _id: 0, host: "mongo-0:27017" },
      { _id: 1, host: "mongo-1:27017" },
      { _id: 2, host: "mongo-2:27017" }
    ]
  }
);
