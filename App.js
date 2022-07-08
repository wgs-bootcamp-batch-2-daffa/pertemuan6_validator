const App = require('./Contact.js')

const main = async () => {
    // QUESTS
    const name = await App.askQuestion(`What's your name `)
    const phone = await App.askQuestion(`Type your phone number... `)
    // const quests =
    //     [
    //         `Whats's your name? `,
    //         `Type your number phone... `
    //     ]

    // let numberQuestion = 0
    // const a = []
    // quests.forEach(async (e) => {
    //     a[numberQuestion] = await askQuestion(e)
    //     numberQuestion++
    // });

    // INSERT DATA
    App.insertDataContacts(name, phone)

    // VALUES
    const val = [
        `Name : ${name}`,
        `Phone : ${phone}`
    ]

    // RETURN
    console.log(`===YOUR INPUT===`);
    val.forEach(e => {
        console.log(e);
    });
}

main()
