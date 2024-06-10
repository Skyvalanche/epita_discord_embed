require('dotenv').config();
const { REST, Routes,  EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, GuildChannelManager, ApplicationCommandOptionType} = require('discord.js');

module.exports =  {
    name : 'embed',
    description : 'Send embed',
    
    callback : async (client, interaction) => {
        
        const channelId = "1228681866618339390"; //met ton id ici
        interaction.reply({ephemeral: true, content: `bouh`});
        const channel = await interaction.guild.channels.cache.get(channelId);
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

        /**/
        await channel.send({embeds : [embedStart]});
    }
}
