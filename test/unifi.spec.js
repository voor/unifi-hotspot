const { expect } = require('chai');
const { login, logout, authorizeGuest } = require('../src/unifi');

const { URI, USERNAME, PASSWORD } = process.env;

describe('Login to Unifi controller', () => {
    it('should provide back a unifises cookie and csrf token', async () => {
        expect(URI).to.not.be.empty;
        expect(USERNAME).to.not.be.empty;
        expect(PASSWORD).to.not.be.empty;
        const data = await login();
        expect(data.meta.rc).to.equal('ok');
    });

    it('should allow guest authorization', async () => {
        expect(URI).to.not.be.empty;
        expect(USERNAME).to.not.be.empty;
        expect(PASSWORD).to.not.be.empty;
        const data = await login();
        expect(data.meta.rc).to.equal('ok');

        const guestRes = await authorizeGuest('E9-9B-72-B3-05-B9');
        console.log(guestRes);
        expect(guestRes.meta.rc).to.equal('ok');
    });

    it('should allow logout', async () => {
        expect(URI).to.not.be.empty;

        const data = await logout();
        expect(data.meta.rc).to.equal('ok');
    });
});
