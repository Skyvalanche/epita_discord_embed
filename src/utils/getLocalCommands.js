const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = (exceptions = []) => {
    let localCommands = [];

    const cmdCategories = getAllFiles(
        path.join(__dirname, '..', 'commands'),
        true
    )
    
    for(const cmdCategorie of cmdCategories) {

        const cmdFiles = getAllFiles(cmdCategorie);

        for (const cmdFile of cmdFiles) {
            const cmdObject = require(cmdFile);

            if (exceptions.includes(cmdObject.name)) continue;
            localCommands.push(cmdObject)
        }
    }

    return localCommands;
}