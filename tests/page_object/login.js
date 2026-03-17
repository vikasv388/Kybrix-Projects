const { expect } = require('@playwright/test');

class LoginPage{
 constructor(page) {
        this.page = page;
        this.dashboardButton = this.page.locator("(//h1[normalize-space()='Dashboard'])");
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
        //return this.page.locator("//button[@fdprocessedid='wdm7zb']");
        //return this.page.getByRole('button', { name: 'Sign In' }).click();
    }

    /*get dashboardButton(){
        return this.page.locator("(//h1[normalize-space()='Dashboard'])");
    }*/



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

async verifyDashboard(){
    try{
    await expect(this.dashboardButton).toBeVisible({ timeout: 30000 });
    }catch(error){
    await this.page.reload({ waitUntil: 'load' });
    await expect(this.dashboardButton).toBeVisible({ timeout: 30000 });
    }  
    
     await expect(this.page).toHaveURL('https://rentifaidev.coinbitwallet.com/user-rent/dashboard');
    console.log("✅ Dashbordpage verified successfully ===>", this.page.url());
  
}





}
module.exports = { LoginPage };