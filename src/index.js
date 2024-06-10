require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');
const eventHandler = require('./handler/eventHandler');

const client = new Client( {intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    ],
});


client.login(process.env.TOKEN);