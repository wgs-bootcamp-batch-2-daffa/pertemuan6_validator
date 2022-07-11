const App = require('./Contact.js')
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
        App.insertDataContacts(argv.name, argv.mobile)
    }
})

yargs.parse()

