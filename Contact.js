const fs = require('fs')
const validator = require('validator')
// 
// DATA CONTACT VALIDATOR FUNCTION
// 
const folderValidator = () => {
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
// VALIDATOR INPUT
// 
const validation = (email, phone) => {
    if (!validator.isEmail(email)) {
        process.stdout.write('\033c');
        console.log(`<=== Email isn't valid ===>`);
        return false
    }
    if (!validator.isMobilePhone(phone, 'id-ID')) {
        process.stdout.write('\033c');
        console.log(`<=== Mobile phone isn't valid ===>`);
        return false
    }
    return true
}
// 
// INSERT DATA CONTACTS
// 
const insertDataContacts = (Name, Email, Phone) => {
    // VALIDATOR FOLDER JSON
    folderValidator()

    // INITIAL DATA
    const contact = { Name, Email, Phone }
    const file = fs.readFileSync('./data/contacts.json', 'utf8')
    const contacts = JSON.parse(file)

    // VALIDATOR DUPLICATE NAME
    let checkName = false
    contacts.forEach(e => {
        if (e.Name == Name) {
            return checkName = true
        }
    });
    if (checkName) {
        process.stdout.write('\033c');
        console.log('<=== Name already exists ===>');
        return false
    }

    // VALIDATOR EMAIL & PHONE
    if (!validation(Email, Phone)) {
        return false
    }

    // INSERT DATA
    contacts.push(contact)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))

    // SUCCESS OUTPUT
    process.stdout.write('\033c');
    console.log('<=== Input success ===>');
    const data = [{
        'Name': Name,
        'Email': Email,
        'Phone': Phone
    }
    ]
    data.forEach(e => {
        console.log(e);
    });

}

module.exports = {
    insertDataContacts
}

