require('dotenv').config();
const {Client, IntentsBitField, ApplicationCommandOptionType, CommandInteractionOptionResolver, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, GuildChannelManager, ChannelType, ChannelManager, PermissionFlagsBits} = require('discord.js');
const { default: mongoose } = require('mongoose');

const client = new Client( {intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', async (interaction) => {
    console.log(`${client.user.tag} is online :)`);
});

client.on('interactionCreate', async (interaction) => {

    if (interaction.commandName == "embedsend") {

        interaction.reply({ephemeral: true, content: `bouh`});
        const embedStart = new EmbedBuilder().setColor('#0099ff')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        .setTitle('Liens Utiles')
        .addFields( {
                name: '**Cours**',
                value: '- [Emploi Du Temps](https://zeus.ionis-it.com/)\n' +
                   '- [Pegasus (Notes)](https://prepa-epita.helvetius.net/pegasus)\n' +
                   '- [PastExam (Annales)](https://past-exams.epidocs.eu/)',
            },
            {
                name: '**Compléments**',
                value: '- [Prog (SUP)](https://prepa.pages.epita.fr/programming/students/2028/)\n' +
                   '- [Archi (S2)](http://www.debug-pro.com/epita/archi/s2/fr/index.html)',
            },
            {
                name: '**EPITA**',
                value: '- [Relations Entreprises](http://epita.net/)\n' +
                       '- [International](https://epitaf.sharepoint.com/sites/EPITAStudyAbroad)\n' +
                       '- [Intracom](http://intracom.epita.fr/)\n' +
                       '- [Absences](https://absences.epita.net/)\n' +
                       '- [Signalement (Harcèlement)](https://epita.signalement.net/)',
            },
            {
                name: '**Autre**',
                value: '- [Fandom Epita](https://epita.fandom.com/fr/)\n' +
                       '- [Moteur de recherche de documents](https://epitar.aureleoules.com/)\n' +
                       '- [EpiTaf (Devoirs)](https://www.epitaf.fr/)\n' +
                       '- [EpiMap (Carte Vj-Kb)](https://epimap.fr/)\n' +
                       '- [Devous (Check L\'Intra)](https://devou.ps/)\n' +
                       '- [Tous les liens](https://epita.it/)\n' +
                       '- [Livret D\'accueil](https://2022-09_Livret_daccueil.pdf)',
            },
            {
                name: '**Reductions Etudiantes**',
                value: '- [EPITA 2028](https://discord.gg/AbqK9R2mPW)\n' + 
                       '- [EPITA 2027](https://discord.gg/3ZJDy7h9pY)\n' +
                       '- [EPITA 2026](https://discord.gg/wJn9Ku98zp)\n' +
                       '- [EPITA 2025](https://discord.gg/SR5jzVA)\n' +
                       '- [EPITA 2024](https://discordapp.com/invite/TUHpqPn)\n' +
                       '- [EPITA 2023](https://discordapp.com/invite/r3vn4U6)\n' +
                       '- [EPITA International](https://discord.gg/ZDUxpED)\n' +
                       '- [BackToBasics](https://discord.com/invite/SJGWzkU2gd)\n' +
                       '- [Vie Associative Paris (Assos)](https://discord.gg/j9t4PdbRpg)\n' +
                       '- [Epifun](https://discord.gg/fVgAVja)\n' +
                       '- [BDE](https://discord.gg/aHQC5q4ubz)'
            }
            )
        .setFooter({ text: 'Id>pl'}); // just facts

        await interaction.channel.send({embeds : [embedStart]});
    }

    if (interaction.commandName == "embededit") {

        const msgId = interaction.options.get("messageid").value;
        interaction.reply({ephemeral: true, content: `bouhDité`});
        const channel = interaction.channel;
        const message = await channel.messages.fetch(msgId);


        const embedStart = new EmbedBuilder().setColor('#0099ff')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        .setTitle('Liens Utiles')
        .addFields( {
                name: '**Cours**',
                value: '- [Emploi Du Temps](https://zeus.ionis-it.com/)\n' +
                   '- [Pegasus (Notes)](https://prepa-epita.helvetius.net/pegasus)\n' +
                   '- [PastExam (Annales)](https://past-exams.epidocs.eu/)',
            },
            {
                name: '**Compléments**',
                value: '- [Prog (SUP)](https://prepa.pages.epita.fr/programming/students/2028/)\n' +
                   '- [Archi (S2)](http://www.debug-pro.com/epita/archi/s2/fr/index.html)',
            },
            {
                name: '**EPITA**',
                value: '- [Relations Entreprises](http://epita.net/)\n' +
                       '- [International](https://epitaf.sharepoint.com/sites/EPITAStudyAbroad)\n' +
                       '- [Intracom](http://intracom.epita.fr/)\n' +
                       '- [Absences](https://absences.epita.net/)\n' +
                       '- [Signalement (Harcèlement)](https://epita.signalement.net/)',
            },
            {
                name: '**Autre**',
                value: '- [Fandom Epita](https://epita.fandom.com/fr/)\n' +
                       '- [Moteur de recherche de documents](https://epitar.aureleoules.com/)\n' +
                       '- [EpiTaf (Devoirs)](https://www.epitaf.fr/)\n' +
                       '- [EpiMap (Carte Vj-Kb)](https://epimap.fr/)\n' +
                       '- [Devous (Check L\'Intra)](https://devou.ps/)\n' +
                       '- [Tous les liens](https://epita.it/)\n' +
                       '- [Livret D\'accueil](https://2022-09_Livret_daccueil.pdf)',
            },
            {
                name: '**Reductions Etudiantes**',
                value: '- [EPITA 2028](https://discord.gg/AbqK9R2mPW)\n' + 
                       '- [EPITA 2027](https://discord.gg/3ZJDy7h9pY)\n' +
                       '- [EPITA 2026](https://discord.gg/wJn9Ku98zp)\n' +
                       '- [EPITA 2025](https://discord.gg/SR5jzVA)\n' +
                       '- [EPITA 2024](https://discordapp.com/invite/TUHpqPn)\n' +
                       '- [EPITA 2023](https://discordapp.com/invite/r3vn4U6)\n' +
                       '- [EPITA International](https://discord.gg/ZDUxpED)\n' +
                       '- [BackToBasics](https://discord.com/invite/SJGWzkU2gd)\n' +
                       '- [Vie Associative Paris (Assos)](https://discord.gg/j9t4PdbRpg)\n' +
                       '- [Epifun](https://discord.gg/fVgAVja)\n' +
                       '- [BDE](https://discord.gg/aHQC5q4ubz)'
            }
            )
        .setFooter({ text: 'Id>pl'}); // just facts
        /*
       await message.edit({ embeds: [embedStart] })
            .then(updatedMessage => {
                console.log('Message edited successfully', updatedMessage);
            })
            .catch(error => {
                console.error('Error editing message:', error);
            });*/
        await message.edit({ embeds: [embedStart] });
    }

})

client.login(process.env.TOKEN);
