# Discord Embed Bot

This is a basic js scipt for sending embeds in discord servers

## What you need

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- discord.js with npm or yarn

## Installation

1. You must add your bot token in the `.env` just after the `TOKEN= ` :

    ```
    TOKEN=token-here
    ```

    token-here = your token

2. Lancez le bot :

    ```bash
    npm install
    ```

## Utilisation

Une fois le bot en ligne, vous pouvez utiliser des commandes prédéfinies pour envoyer des messages embed dans votre serveur Discord. Voici quelques exemples de commandes disponibles :

- `!embed simple`: Envoie un message embed simple.
- `!embed info`: Envoie un message embed d'information.

## Personnalisation

Vous pouvez personnaliser les embeds en modifiant le fichier `src/commands/embed.js`. Voici un exemple d'embed basique :

```javascript
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Envoie un message embed.',
    execute(message, args) {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Exemple Embed')
            .setDescription('Ceci est un exemple de message embed.')
            .setTimestamp()
            .setFooter('Embed Bot', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(embed);
    },
};

