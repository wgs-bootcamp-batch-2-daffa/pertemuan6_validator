const fs = require('fs')
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

    // INITIAL DATA
    const contact = { Name, Email, Phone }
    const file = fs.readFileSync('./data/contacts.json', 'utf8')
    const contacts = JSON.parse(file)

    // VALIDATOR DUPLICATE NAME
    let checkName = false
    contacts.forEach(e => {
        if (e.Name == Name) {
            checkName = true
        }
    });
    if (checkName) {
        console.log('<=== Nama sudah ada ===>');
        return true
    }

    // INSERT DATA
    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

    console.log('<=== Thank you ===>');

}

module.exports = {
    insertDataContacts
}

