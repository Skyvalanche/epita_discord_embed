require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'embedsend',
        description: 'Send Embed',
    },
    {
        name: 'embededit',
        description: 'Edit Embed',
        options: [
            {
                name: 'messageid',
                description: 'The Id of the message',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
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
