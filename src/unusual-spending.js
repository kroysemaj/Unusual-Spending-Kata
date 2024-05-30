const fetchPayments = require('./fetch-payments');
const determineHighSpending = require('./determine-high-spending');
const notifyCardholder = require('./notify-cardholder');

module.exports = (userId) => {
    console.log('here')
    fetchPayments(userId, (err, payments) => {
        const spending = determineHighSpending(payments);
        notifyCardholder.email(userId, spending);
    })
}