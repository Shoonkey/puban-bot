import createSlashCommand from "../core/create-slash-command";
import Puban from "../languages/puban";

export default createSlashCommand({
  configureBuilder(builder) {
    builder
      .setName("encrypt")
      .setDescription("Encrypts a message into Puban")
      .addStringOption((option) =>
        option
          .setName("message")
          .setDescription("The message to encrypt")
          .setRequired(true)
      );
  },
  async execute(interaction) {
    const message = interaction.options.getString("message", true);
    await interaction.reply(Puban.encrypt(message));
  },
});
