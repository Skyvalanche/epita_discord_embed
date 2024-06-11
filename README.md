# Discord Embed Bot

This is a basic js scipt for sending embeds in discord servers

## What you need

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Discord.js with npm or yarn

## Installation

1. You must add your bot token in the `.env` just after `TOKEN= ` as well as your serverid in `GUILD_ID` and bot discord id in `CLIENT_ID`:

    ```
    TOKEN = YOUR_TOKEN
    GUILD_ID = SERVER_ID
    CLIENT_ID = BOT_ID
    ```


2. Register the commands:

    Embed are send with slash commands
    
    ```bash
    node embedregister.js
    ```
    
3. Start the bot:

    ```bash 
    node index.js
    ```
