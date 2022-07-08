const fs = require('fs')

const validator = require('validator')

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// 
// ASK QUESTION FUNCTION
// 
const askQuestion = (ask) => {
    return new Promise((resolve) => {
        rl.question(ask, (input) => {
            console.log('Next input ==>');
            resolve(input)
        })
    })
}
// 
// DATA CONTACT VALIDATOR FUNCTION
// 
const dataContactsValidator = () => {
    // VALIDATION FOLDER
    const dirPath = './data'
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }

    // VALIDATION FILE
    const dataPath = './data/contacts.json'
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, '[]', 'utf8')
    }
}
// 
// INSERT DATA CONTACTS
// 
const insertDataContacts = (Name, Phone) => {
    // VALIDATOR
    dataContactsValidator()

    // INSERT DATA
    const contact = { Name, Phone }
    const file = fs.readFileSync('./data/contacts.json', 'utf8')
    const contacts = JSON.parse(file)
    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
}
module.exports = {
    askQuestion,
    insertDataContacts
}

