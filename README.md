# Puban bot

A bot built to teach people about a made-up cipher I've made with a friend. The cipher is called Puban.

## Installing dependencies

This is a Node project, so to run it you'll need NodeJS and NPM installed. It's been tested in the version v18.16.0 of Node.

To install dependencies, run in the app folder:

```sh
npm i
```

## Running the bot

### Setting up the environment

After creating the bot in the [Discord applications tab](https://discord.com/developers/applications), you'll get a token and a client ID, which you can use to set up the production environment (through `.env.production`), and for the development environment you can use a specific guild ID (through `.env.development`) to scope the updates. Your environment file will look like `.env.example`.

> Remember to keep the environment file secret as leaking this information can lead to malicious behavior happening freely on the bot. If for some reason your bot token gets leaked, access the developer application tab and reset it; that will invalidate the previous token and prevent further malicious behavior!

### Inviting the bot to a guild

To invite your bot to a guild, you can use the *URL generator* tab, under the *OAuth2* section in your Discord application view. Currently it only needs the scopes *bot* and *applications.commands*. That page will generate the URL for making the bot join a guild.

### Registering commands

After your bot has joined a guild, for the slash commands to appear on the interface, it's necessary to tell Discord what commands are there (i.e. effectively deploy them). You can deploy commands globally (for all guilds your bot is on) or locally (for specific guilds).

To deploy *for a specific guild*, run

```sh
npm run deploy:dev
```

> Remember to have your GUILD_ID defined in your .env.development file for this to properly register the commands. You can find it by enabling dev mode on Discord and then right-clicking your guild and then "Copy server ID".

To deploy *for all guilds your bot is on*, run

```sh
npm run deploy:prod
```

### Running the bot

To run the bot in *development* mode, run

```sh
npm run start:dev
```

To run it in *production* mode, run

```sh
npm run start:prod
```

Currently the environment variable does not add behavior, but it is implemented this way in case at some point it does. This means you can run the base script directly, `npm run start` and it will start up the bot, but it's not recommended.