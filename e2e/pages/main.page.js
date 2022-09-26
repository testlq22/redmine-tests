class MainPage {
    getHeaderSections() {
        return '[class="sc-14c941d7-4 jgxzDd"] > li';
    }

    getHeader() {
        return 'header';
    }

    getTitle() {
        return 'title';
    }

    getEmail() {
        return 'input[type="email"]';
    }

    getSignupHeader() {
        return '[href="/sign-up"';
    }

    getSignupFooter() {
        return '//*[@id="__next"]/div[1]/footer/div[1]/div/div[5]/div/ul/li[1]/a/span/span';
    }

    getLoginHeader() {
        return '//*[@id="__next"]/div[1]/header/div[1]/div/div/a[2]';
    }

}
require("cypress-xpath")
module.exports = new MainPage()