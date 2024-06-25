const Agenda = require('agenda');
require('dotenv').config();
const mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/email_scheduler';

const agenda = new Agenda({
    db: { address: mongoConnectionString, collection: 'jobs' },
});

module.exports = agenda;
