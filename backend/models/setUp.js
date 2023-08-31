const {Users, Questions, answers} = require('./Associations');
const LoginUser = require('./LoginUser');
const ContactUsMessages = require('./ContactsUs.js');



async function createTables() {
    try {
        await ContactUsMessages.sync()
        // await Users.sync({force: true});
        // await Questions.sync({force: true});
        // await answers.sync({force:true});
        console.log('Made tables for U and Q!')
    } catch (err) {
        console.log('Did not make tables', err)
    }
}

module.exports = {
    createTables
}