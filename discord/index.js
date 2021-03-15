const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const { token } = config;

client.once("ready", () => {
  console.log("Ready!");
});

client.login(token);
