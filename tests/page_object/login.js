const { expect } = require('@playwright/test');

class LoginPage{
 constructor(page) {
        this.page = page;
    }


    get loginButton(){
        return this.page.locator("(//div[@class='hidden md:flex items-center space-x-6']//button)[1]");
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

    get dashboardButton(){
        return this.page.locator("(//span[contains(text(),'Dashboard')])[2]");
    }

    get rentaCarButton(){
        return this.page.locator("(//div[contains(text(),'Rent a Car')])[1]");
    }

     get rentNowButton(){
        return this.page.locator("(//span[contains(text(),'Rent now')])[2]");
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

async verifyDashboard(){
    try{
    await expect(this.dashboardButton).toBeVisible({ timeout: 30000 });
    }catch(error){
    await this.page.reload({ waitUntil: 'load' });
    await expect(this.dashboardButton).toBeVisible({ timeout: 30000 });
    }   
  
}

async clickOnRentACarButton(){
    try{
    await expect(this.rentaCarButton).toBeVisible({ timeout: 30000 });  
    await this.rentaCarButton.click();
    }catch(error){
    console.log("Button was not visible in first try ===> Refreshing the browser");
    await this.page.reload({ waitUntil: 'load' });
    await expect(this.rentaCarButton).toBeVisible({ timeout: 30000 });  
    await this.rentaCarButton.click();

    }
}

async clickOnRentNowButton(){
     await this.rentNowButton.toBeVisible({ timeout: 30000 });  
    await this.rentNowButton.click();
}

}
module.exports = { LoginPage };