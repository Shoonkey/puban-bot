import { REST, Routes } from "discord.js";
import { config as loadEnvironment } from "dotenv";

import loadCommands from "../core/load-commands";

loadEnvironment();

async function deployCommands() {
  if (!process.env.BOT_TOKEN)
    throw new Error("Bot token not found in environment file");

  if (!process.env.CLIENT_ID)
    throw new Error("Client ID not found in environment file");

  const commandData = loadCommands().map((command) => command.config.toJSON());

  // Construct and prepare an instance of the REST module
  const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

  if (process.env.GUILD_ID) {
    // Refresh commands for a specific server
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commandData }
    );
  } else {
    // Refresh commands in all servers bot is in
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commandData,
    });
  }
}

deployCommands()
  .then(() => console.log(`[${process.env.NODE_ENV}] Commands deployed!`))
  .catch((err) =>
    console.error(
      `[${process.env.NODE_ENV}] Failed to deploy commands. Error:`,
      err
    )
  );
