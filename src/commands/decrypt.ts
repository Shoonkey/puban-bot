import createSlashCommand from "../core/create-slash-command";
import Puban from "../languages/src/puban";

export default createSlashCommand({
  configureBuilder(builder) {
    builder
      .setName("decrypt")
      .setDescription("Decrypts a message from Puban")
      .addStringOption((option) =>
        option
          .setName("message")
          .setDescription("The message to encrypt")
          .setRequired(true)
      );
  },
  async execute(interaction) {
    const message = interaction.options.getString("message", true);
    await interaction.reply(Puban.decrypt(message));
  },
});
