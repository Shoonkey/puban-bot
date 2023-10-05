import createSlashCommand from "../core/create-slash-command";

export default createSlashCommand({
  configureBuilder(builder) {
    builder
      .setName('ping')
      .setDescription('Replies with Pong!');
  },
  async execute(interaction) {
    await interaction.reply("Pong!");
  }
})