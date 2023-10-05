import { ChatInputCommandInteraction, Collection } from "discord.js";

import Command from "../shared/Command";
import loadCommands from "./load-commands";

const commandCollection = new Collection<string, Command>();

loadCommands().forEach(command => {
  commandCollection.set(command.config.name, command);
});

async function executeSlashCommand(interaction: ChatInputCommandInteraction) {
  const requestedCommand = commandCollection.get(interaction.commandName);

  if (!requestedCommand) {
    await interaction.reply({
      content: `The command \`${interaction.commandName}\` doesn't exist!`,
    });
    return;
  }

  try {
    await requestedCommand.execute(interaction);
  } catch (e) {
    await interaction.reply("Something went wrong... Maybe try again later? :v");
    console.error(
      `An error ocurred when running "${interaction.commandName}". Error:`,
      e
    );
  }
}

export default executeSlashCommand;