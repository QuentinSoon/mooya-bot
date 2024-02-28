require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const deleteAllGuildsCommands = require("./utils/commandUtils");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  deleteAllGuildsCommands(process.env.CLIENT_ID);
});

client.login(process.env.TOKEN);
