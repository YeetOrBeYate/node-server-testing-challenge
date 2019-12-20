const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");
const hobsRouter = require("../hobbits/hobbitRouter.js");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv:process.env.DB_ENV });
});

server.use("/hobbits", hobsRouter);

module.exports = server;