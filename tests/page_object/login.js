const { expect } = require('@playwright/test');

class LoginPage{
 constructor(page) {
        this.page = page;
    }


    get loginButton(){
        return this.page.getByText('Log In');
    }

    get emailField(){
        return this.page.locator("(//input[@placeholder='Email'])[3]");
    }

      get passwordField(){
        return this.page.locator("(//input[@placeholder='Password'])[3]");
    }

    get signInButton(){
        return this.page.locator("(//button[contains(text(),'Sign In')])[3]");
    }



    async openURL(){
      await this.page.goto("https://rentifaidev.coinbitwallet.com/", {
        waitUntil: "load",
        timeout: 90000
    });
}

 async verifyHomepage(){
   await expect(this.page).toHaveURL('https://rentifaidev.coinbitwallet.com/');
    console.log("✅ Homepage verified successfully ===>", this.page.url());
 }

 async clickOntheLoginButton(){
    await this.loginButton.click();
 }

async fillEmailField(email){
    await this.emailField.fill(email);
}

async fillPasswordField(password){
    await this.passwordField.fill(password);
}

async clickOnTheSignInButton(){
    await this.signInButton.click();
}





}
module.exports = { LoginPage };