'use strict';

class Forum {
    constructor() {
        this.url = 'http://www.bmwclub.by/forum/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.signIn = element(by.id('sign_in'));
        this.usernameField = element(by.id('ips_username'));
        this.usernameField = element(by.id('ips_password'));
        this.usernameField = element(by.valueOf('Войти'));
    }
}
module.exports = Forum;
