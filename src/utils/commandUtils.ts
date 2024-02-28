const { REST, Routes } = require("discord.js");

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// Delete specific command for specific guild
module.exports = async function deleteGuildCommand(
  clientId: string,
  guildId: string,
  commandId: string
) {
  (async () => {
    try {
      await rest
        .delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
        .then(() =>
          console.log(
            `Successfully deleted command (Guild-Based): ${commandId}`
          )
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};

// Delete specific command for all guilds
module.exports = async function deleteAllGuildsCommand(
  clientId: string,
  commandId: string
) {
  (async () => {
    try {
      await rest
        .delete(Routes.applicationCommand(clientId, commandId))
        .then(() =>
          console.log(`Successfully deleted command (ALL Guilds): ${commandId}`)
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};

// Delete all commands for specific guild
module.exports = async function deleteGuildCommands(
  clientId: string,
  guildId: string
) {
  (async () => {
    try {
      await rest
        .put(Routes.applicationGuildCommands(clientId, guildId), {
          body: [],
        })
        .then(() => `Successfully deleted ALL commands (Guild-Based)`)
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};

// Delete all commands for all guilds
module.exports = async function deleteAllGuildsCommands(clientId: string) {
  (async () => {
    try {
      await rest
        .put(Routes.applicationCommands(clientId), { body: [] })
        .then(() =>
          console.log(`Successfully deleted ALL commands (ALL Guilds)`)
        )
        .catch(console.error);
    } catch (error) {
      console.error(error);
    }
  })();
};
