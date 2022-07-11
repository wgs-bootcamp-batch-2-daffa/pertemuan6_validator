const fs = require('fs')
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
        fs.writeFileSync(dataPath, '[]')
    }
}
// 
// INSERT DATA CONTACTS
// 
const insertDataContacts = (Name, Email, Phone) => {
    // VALIDATOR
    dataContactsValidator()

    // INSERT DATA
    const contact = { Name, Email, Phone }
    const file = fs.readFileSync('./data/contacts.json', 'utf8')
    const contacts = JSON.parse(file)

    let checkName = false
    contacts.forEach(e => {
        if (e.Name == Name) {
            return checkName = true
        }
    });
    if (checkName == true) {
        console.log('Nama sudah ada');
    } else {
        contacts.push(contact)
        fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

        console.log('thank you');
    }
}
module.exports = {
    askQuestion,
    insertDataContacts
}

