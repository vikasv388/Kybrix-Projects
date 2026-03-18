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

   get locationText(){
    return this.page.locator("//label[contains(text(),'LOCATION')]");
   }


   get locationField(){
    return this.page.locator("#location-city-input");
   }

    get pickupField(){
    return this.page.locator("//input[@placeholder='Pick-Up Date']");
   }

   get dropOffField(){
    return this.page.locator("//input[@placeholder='Drop-Off Date']");
   }

   get searchButton(){
    return this.page.locator("//button[contains(text(),'Search')]");
   }

   get bookNowButton(){
    return this.page.locator("(//button[contains(text(),'Boook Now')])[1]");
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
    await expect(this.rentNowButton).toBeVisible({ timeout: 30000 });  
    await this.rentNowButton.click();
}

async verifyLocationText(){
    await expect(this.locationText, 'Location field is not visible').toBeVisible();
}
  
async fillLocationField(location){
    await this.locationField.fill(location);
    await this.page.waitForTimeout(5000);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
}

async fillPickUpField(){
    await this.pickupField.click();
    await this.page.keyboard.press('ArrowRight');
    await this.page.keyboard.press('Enter');
    const time = await this.page.locator("(//ul[@class='react-datepicker__time-list']//li)[11]");
    await time.click();
}

async fillDropOffField(){
    await this.dropOffField.click();
    const time = await this.page.locator("(//ul[@class='react-datepicker__time-list']//li)[15]");
    await this.page.waitForTimeout(2000);
    await time.click();
   
}

async clickOnSearchButton(){
    await this.searchButton.click();
}

async verifyCarSearchPage(){
    await expect(this.bookNowButton, 'Car list page is not visible').toBeVisible();
}

async clickOnBookNowButton(){
    await this.bookNowButton.click();
    await this.page.pause();
}

}
module.exports = { LoginPage };