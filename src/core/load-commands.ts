import fs from "fs";
import path from "path";

import Command from "../shared/Command";

export default function loadCommands(): Command[] {
  const commandsPath = path.join(__dirname, "../commands");
  const commands: Command[] = [];

	// Grab all the command files from the commands directory
	const commandFiles = fs
		.readdirSync(commandsPath)
		.filter(file => file.endsWith('.ts'));

	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const command: Command = require(`${commandsPath}/${file}`).default;
		commands.push(command);
	}

  return commands;
}