import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import Command from "../shared/Command";

interface CommandConfig {
  configureBuilder: (builder: SlashCommandBuilder) => void;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

function createSlashCommand({
  configureBuilder,
  execute,
}: CommandConfig): Command {
  const builder = new SlashCommandBuilder();
  configureBuilder(builder);

  return { config: builder, execute };
}

export default createSlashCommand;
