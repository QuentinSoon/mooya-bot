require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "fdsfs",
    description: "Replies with Podsdngs!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest
      .put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID,
          process.env.GUILD_ID
        ),
        { body: [] }
      )
      .then(() => console.log("Successfully deleted all guild commands."))
      .catch(console.error);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
