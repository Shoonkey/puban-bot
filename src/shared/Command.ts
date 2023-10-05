import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
} from "discord.js";

export default interface Command {
  config: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}