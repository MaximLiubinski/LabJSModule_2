'use strict';

class Home {
    constructor() {
        this.url = 'http://www.bmwclub.by/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.mainButton = element(by.id('menu-item-745'));
        this.clubButton = element(by.id('menu-item-219'));
        this.partnersButton = element(by.id('menu-item-218'));
        this.forumButton = element(by.id('menu-item-215'));

        this.allElements = {
            'desktop': '#intro',
            'phonePicture': '.phone_picture.animated',
            'sliding':'.sliding_pictures',
            'video_ctrl':'.video_controls',
            'features':'.features_wrapper',
            'video':'.background_video',
            'soundtracks':'#soundtracks>div.content_wrapper',
            'videolist':'.video_item',
            'creators':'#creators>div>div'
        };

    }
}
module.exports = Home;
