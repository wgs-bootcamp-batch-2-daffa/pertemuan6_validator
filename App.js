const Contact = require('./Contact.js')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'contact name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'contact email',
            demandOption: false,
            type: 'string'
        },
        mobile: {
            describe: 'contact mobile',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Contact.insertDataContacts(argv.name, argv.email, argv.mobile)
    }
})

yargs.parse()

