require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'embed',
        description: 'Send Embed'
    },
    {
        name: 'embedEdit',
        description: 'Edit Embed'
        options: {
            name: 'messageId',
            description: 'The Id of the message',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    }
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands}
        )
        console.log('embed cmd registers');
    }
    catch (error){
        console.log(`${error}`)
    }
})();
