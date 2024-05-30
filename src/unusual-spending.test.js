const userId = 42;
const notifyCardholder = require('./notify-cardholder');
const subject = require("./unusual-spending");

jest.mock('./fetch-payments', () => jest.fn((userId, callback) => callback('some payments')));
jest.mock('./determine-high-spending', () => jest.fn((payments) => 'high spending'));
jest.mock('./notify-cardholder');

xdescribe('Unusual Spending', () => {
    it('should do the dang thing', () => {
        subject(userId);
        expect(notifyCardholder.email).toHaveBeenCalledWith(userId, 'high spending');
    });
}); 