const tmi = require("tmi.js");
const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: "aws",
    reconnect: true,
  },
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  channels: [
   'channel'
  ],
};
const client = new tmi.client(options);

module.exports = client;
