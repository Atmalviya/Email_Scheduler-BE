const Agenda = require('agenda');
require('dotenv').config();
const mongoConnectionString = process.env.MONGODB_URI;

const agenda = new Agenda({
    db: { address: mongoConnectionString, collection: 'jobs' },
});

agenda.on('ready', () => {
    console.log('Agenda started');
});

agenda.on('error', (error) => {
    console.error('Agenda connection error:', error);
});

module.exports = agenda;
