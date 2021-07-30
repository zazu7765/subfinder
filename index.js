// importing configs which won't be available on github
const creds = require('./.config/serviceaccount.json');
const config = require('./.config/config.json');
// require packages
const { GoogleSpreadsheet } = require('google-spreadsheet');

// initialize sheet
const doc = new GoogleSpreadsheet(config.sheet);

// initialize google auth
async function googleAuth(creds) {
    await doc.useServiceAccountAuth(creds);
}

//load properties and sheets
const doctitle = async()=> {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const people = []
    for (let i = 1; i< rows.length;i++){
       people.push(rows[i].Lead);
    }
    console.log(people);
}
googleAuth(creds);
doctitle();

