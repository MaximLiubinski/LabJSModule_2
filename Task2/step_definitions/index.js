'use strict';
const expect=require('chai').expect;
const world = require('../support/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;

module.exports = function () {

    this.Given(/^I am on Home page$/, () => {
        return world.homePage.openPage();
    });

    this.Then(/^I click Main button$/, () => {
        return world.homePage.mainButton.click();
    });

    this.Then(/^I click Forum button$/, () => {
        return world.homePage.forumButton.click();
    });

    this.Then(/^I click sign in button$/, () => {
        return world.forumPage.signIn.click();
    });

    this.Then(/^I wait page loaded$/, () => {
        return  browser.wait(EC.visibilityOf(world.itunesPage.contentPage),DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^"(.*)" form should be visible$/, () => {
        return browser.wait(EC.visibilityOf(world.joinForm.joinForm), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I enter first and last name$/, () => {
        return world.joinForm.flName.sendKeys('John John');
    });
    this.Then(/^I enter email address$/, () => {
        let now = new Date();
        return world.joinForm.email.sendKeys('test'+now.getTime()+'@gmail.com');
    });
    this.Then(/^I enter password$/, () => {
        return world.joinForm.password.sendKeys('12345qwerty');
    });

    this.Then(/^I click Download button$/, () => {
        return world.homePage.mainButton.click();
    });

    this.Then(/^Page title should be "(.*)"$/, (title) => {
       return browser.getTitle().then((text)=>{
           return expect(text).to.equal(title);
        });
    });
};