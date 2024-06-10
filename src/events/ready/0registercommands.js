const { server } = require('../../../config.json');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');
const areCommandsDifferent = require('../../utils/areCmdsDiff');
const { description, options } = require('../../commands/misc/malus');

module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(client, server);

        for(const localCommand of localCommands) {
            const {name, description, options} = localCommand

            const existingCmd = await applicationCommands.cache.find((cmd) => cmd.name === name);

            if (existingCmd) {
                if (localCommand.deleted) {
                    await applicationCommands.delete(existingCmd.id)
                    console.log(`Removed cmd ${name}`);
                    continue;
                }
                
                if(areCommandsDifferent(existingCmd, localCommand)) {
                    await applicationCommands.edit(existingCmd.id, {
                        description,
                        options,
                    });
    
                    console.log(`Updated cmd ${name}`);
                }
            }
            else {
                if (localCommand.deleted) {
                    console.log(`Skipping cmd ${name} (deleted)`)
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options
                });
                
                console.log(`Resgistered cmd ${name}`)
            }

            
        }
    }
    catch(error) {
        console.log(`Error :${error}`);
    }
};