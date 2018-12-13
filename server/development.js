const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackIsomorphicDevMiddleware = require("webpack-isomorphic-dev-middleware");

const clientCompiler = webpack(require("../build/client/development.config"));
const serverCompiler = webpack(require("../build/server/development.config"));

const server = express();
const serverPort = 5000;

server.use("/static", express.static(path.join(__dirname, "../static")));
server.use("/public", express.static(path.join(__dirname, "../dist/client")));

server.use(webpackIsomorphicDevMiddleware(clientCompiler, serverCompiler));

server.get("*", (req, res) => {
  const renderApp = res.locals.isomorphic.exports.default;
  res.send(renderApp("/public/app.bundle.js"));
});

server.listen(serverPort, () => console.log(`Started on port ${serverPort}`));