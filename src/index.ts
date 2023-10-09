import { Client, Events, GatewayIntentBits } from "discord.js";

import executeSlashCommand from "./core/execute-slash-command";
import loadEnvironment from "./core/load-environment";

loadEnvironment();

const botToken = process.env.BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, client => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand())
    return;

  await executeSlashCommand(interaction);
});

client.login(botToken);