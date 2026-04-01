const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get loginButton() {
    return this.page.locator("(//div[@class='hidden md:flex items-center space-x-6']//button)[1]");
  }

  get emailField() {
    return this.page.locator("(//input[@placeholder='Email'])[3]");
  }

  get passwordField() {
    return this.page.locator("(//input[@placeholder='Password'])[3]");
  }

  get signInButton() {
    return this.page.locator("(//button[contains(text(),'Sign In')])[3]");
  }

  get dashboardButton() {
    return this.page.locator("(//span[contains(text(),'Dashboard')])[2]");
  }

  get rentaCarButton() {
    return this.page.locator("(//div[contains(text(),'Rent a Car')])[1]");
  }

  get rentNowButton() {
    return this.page.locator("(//span[contains(text(),'Rent now')])[2]");
  }

  async openURL() {
    await this.page.goto("https://rentifaidev.coinbitwallet.com/", {
      waitUntil: "load",
      timeout: 90000,
    });
  }

  get locationText() {
    return this.page.locator("//label[contains(text(),'LOCATION')]");
  }

  get locationField() {
    return this.page.locator("#location-city-input");
  }

  get pickupField() {
    return this.page.locator("//input[@placeholder='Pick-Up Date']");
  }

  get dropOffField() {
    return this.page.locator("//input[@placeholder='Drop-Off Date']");
  }

  get searchButton() {
    return this.page.locator("//button[contains(text(),'Search')]");
  }

  get bookNowButton() {
    return this.page.locator("(//button[contains(text(),'Book Now')])[1]");
  }

  get tripSummaryText() {
    return this.page.locator("//h3[contains(text(),'Trip Summary')]");
  }

  get iAgreeCheckbox() {
    return this.page.locator("#terms-checkbox");
  }

  get downArrowButton() {
    return this.page.locator('(//button[contains(@class, "sticky") and contains(@class, "cursor-pointer") and contains(@style, "float: right")])[2]');
  }

  get agreeAndCloseButton() {
    return this.page.locator("//div[@class='flex justify-center items-center']//button");
  }

  get proceedToPayButton() {
    return this.page.locator("//button[contains(text(),'Proceed to pay')]|//button[contains(text(),'Proceed to Pay')]");
  }

  get orderSummaryPage() {
    return this.page.locator("//h3[contains(text(),'Order Summary')]");
  }

  get securityBlockPopup() {
    return this.page.locator("//h3[contains(text(),'Confirm Security Block')]");
  }

  get iAgreeAndContinueButton() {
    return this.page.locator("//button[contains(text(),'I Agree, Continue')]");
  }

  get bookingCompletePopup() {
    return this.page.locator("//h3[contains(text(),'BOOKING COMPLETE')]");
  }

  get completeBookingDashboardButton() {
    return this.page.locator("//button[contains(text(),'Dashboard')]");
  }

  get bookingNumberField() {
    return this.page.locator("(//tr[@class='border-b border-b-[#707070] sticky top-0 text-[#fff] bg-[#a64ac9] max-sm:px-0']//th)[3]");
  }

  get listACarButton() {
    return this.page.locator("(//div[contains(text(),'List a Car')])[1]");
  }

  get listNowButton() {
    return this.page.locator("(//span[contains(text(),'List now')])[2]");
  }

  get carListingFirstSection() {
    return this.page.locator("//p[contains(text(),'What is Your Car Plate Number?')]");
  }

  get verifyButton() {
    return this.page.locator("//button[contains(text(),'Verify')]");
  }

  get bankDeatilsCrossButton() {
    return this.page.locator("(//button[@class='absolute top-4 right-2 text-white rounded-full bg-[#A64AC9] w-7 h-7 flex items-center justify-center'])[1]");
  }

  get nextButton() {
    return this.page.locator("//button[contains(text(),'Next')]");
  }

  get plateField() {
    return this.page.getByPlaceholder("Plate Number");
  }

  get nameField() {
    return this.page.locator("(//input[@type='text'])[3]");
  }

  get mobileField() {
    return this.page.locator("(//input[@type='text'])[4]");
  }

  get carListingEmailField() {
    return this.page.locator("//input[@type='email']");
  }

   get kmDrivenField() {
    return this.page.locator("#kmDriven");
  }

  get carPrice() {
    return this.page.locator("(//input[@type='number'])[1]");
  }

  get carValueField() {
    return this.page.locator("#valueOfCar");
  }

  get pickupLocation() {
    return this.page.locator("#location-city-input");
  }

  get pickupDeliveryField() {
    return this.page.locator("//input[@type='number']");
  }

  get airportfield() {
    return this.page.locator("#airport");
  }





















   

  async verifyHomepage() {
    await expect(this.page).toHaveURL("https://rentifaidev.coinbitwallet.com/");
    console.log("✅ Homepage verified successfully ===>", this.page.url());
  }

  async clickOntheLoginButton() {
    await this.loginButton.click();
  }

  async fillEmailField(email) {
    await this.emailField.fill(email);
  }

  async fillPasswordField(password) {
    await this.passwordField.fill(password);
  }

  async clickOnTheSignInButton() {
    await this.signInButton.click();
  }

  async verifyDashboard() {
    try {
      await expect(this.dashboardButton).toBeVisible({ timeout: 30000 });
    } catch (error) {
      await this.page.reload({ waitUntil: "load" });
      await expect(this.dashboardButton).toBeVisible({ timeout: 30000 });
    }
  }

  async clickOnRentACarButton() {
    try {
      await expect(this.rentaCarButton).toBeVisible({ timeout: 30000 });
      await this.rentaCarButton.click();
    } catch (error) {
      console.log("Button was not visible in first try ===> Refreshing the browser");
      await this.page.reload({ waitUntil: "load" });
      await expect(this.rentaCarButton).toBeVisible({ timeout: 30000 });
      await this.rentaCarButton.click();
    }
  }

  async clickOnRentNowButton() {
    await expect(this.rentNowButton).toBeVisible({ timeout: 30000 });
    await this.rentNowButton.click();
  }

  async verifyLocationText() {
    await expect(this.locationText, "Location field is not visible").toBeVisible();
  }

  async fillLocationField(location) {
    await this.locationField.fill(location);
    await this.page.waitForTimeout(5000);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  async fillPickUpField() {
    await this.pickupField.click();
    await this.page.keyboard.press("ArrowRight");
    await this.page.keyboard.press("Enter");
    const time = await this.page.locator("(//ul[@class='react-datepicker__time-list']//li)[11]");
    await time.click();
  }

  async fillDropOffField() {
    await this.dropOffField.click();
    const time = await this.page.locator("(//ul[@class='react-datepicker__time-list']//li)[15]");
    await this.page.waitForTimeout(1000);
    await time.click();
  }

  async clickOnSearchButton() {
    await this.searchButton.click();
  }

  async verifyCarSearchPage() {
    await expect(this.bookNowButton, "Car list page is not visible").toBeVisible({ timeout: 30000 });
  }

  async clickOnBookNowButton() {
    await this.bookNowButton.click();
  }

  async verifyTripSummaryText() {
    await this.tripSummaryText.waitFor({ state: "visible", timeout: 20000 });
  }

  async clickOnIAgreeCheckbox() {
    await this.iAgreeCheckbox.click();
  }

  async clickOnDownArrowButton() {
    await this.downArrowButton.click();
  }

  async clickOnAgreeAndCloseButton() {
    await this.agreeAndCloseButton.click();
  }

  async clickOnproceedToPayButton() {
    await this.proceedToPayButton.click();
  }

  async verifyOrderSummaryPage() {
    await expect(this.orderSummaryPage).toBeVisible({ timeout: 30000 });
  }

  async verifySecurityBlockPopup() {
    await expect(this.securityBlockPopup).toBeVisible();
  }

  async clickOnIAgreeAndContinueButton() {
    await this.iAgreeAndContinueButton.waitFor({ state: "visible", timeout: 20000 });
    await this.iAgreeAndContinueButton.click();
  }

  async verifySavePaymentPage() {
    const expiryFrame = this.page.frameLocator("//iframe[@title='Embedded checkout']");
    await expiryFrame.locator("//h2[contains(text(),'Save payment information')]").waitFor({ state: "visible", timeout: 20000 });
  }

  async fillCardNumberField(card, date, cvc, name) {
    const expiryFrame = this.page.frameLocator("//iframe[@title='Embedded checkout']");
    await expiryFrame.locator("#cardNumber").fill(card);
    await expiryFrame.locator("#cardExpiry").fill(date);
    await expiryFrame.locator("#cardCvc").fill(cvc);
    await expiryFrame.locator("#billingName").fill(name);
  }

  async clickOnSaveButton() {
    const expiryFrame = this.page.frameLocator("//iframe[@title='Embedded checkout']");
    await expiryFrame.locator("//div[@class='SubmitButton-IconContainer']").click();
  }

  async verifyBookingCompletePopup() {
    await expect(this.bookingCompletePopup).toBeVisible({ timeout: 60000 });
  }

  async verifyBookingNumber() {
    const bookingNo = await this.page.locator("(//span[@class='w-[50%] font-bold text-end'])[5]");
    const validBookingNo = await bookingNo.innerText();
    await this.completeBookingDashboardButton.click();
    await this.bookingNumberField.click();
    const bookingNoField = await this.page.locator("#floating_outlined1");
    const fillBookingNo = bookingNoField.fill(validBookingNo);
    const filteredBookingNo = await this.page.locator("(//td[@class='pt-3 pb-2 text-center font-medium text-base max-sm:text-xs max-sm:px-1'])[2]");
    await this.page.waitForTimeout(3000);
    const validFilteredBookingNo = await filteredBookingNo.innerText();
    if (validBookingNo === validFilteredBookingNo) {
      console.log("✅ Booking numbers match" + " >>> Booking Number " + validBookingNo);
    } else {
      console.log("❌ Booking numbers do not match" + validBookingNo + "..........." + validFilteredBookingNo);
      throw new Error("Booking numbers mismatch" + +validBookingNo + "..........." + validFilteredBookingNo);
    }
  }

  async clickOnListACarButton() {
    await this.listACarButton.click();
  }

  async clickOnlistNowButton() {
    try {
      await this.bankDeatilsCrossButton.click();
    } catch (error) {}

    await this.listNowButton.click();
  }

  async verifyCarListingFirstSection() {
    await expect(this.carListingFirstSection).toBeVisible({ timeout: 40000 });
  }

  async clickOnVerifyButton() {
    await this.verifyButton.click();
  }

  async verifyValidationMessage(validation) {
    const msg = await this.page.locator("(//span[contains(text(),'" + validation + "')]|//div[contains(text(),'" + validation + "')])[1]");
    await expect(msg).toBeVisible({ timeout: 30000 });
    console.log("Validation is visible >>>> " + validation);
  }

  async clickOnNextButton() {
    await this.nextButton.click();
  }

  async fillPlateField(text) {
    await this.plateField.fill(text);
  }

  async selectPetrolType(type) {
    const fuelType = await this.page.locator("//div[@class='w-full relative dropdown-wrapper  mt-0.5']//select");
    await fuelType.click();
    await fuelType.selectOption({ label: type });
  }

  async fillNameField(text) {
    await this.nameField.fill(text);
    await this.page.waitForTimeout(500);
  }

  async fillMobileField(text) {
    await this.mobileField.fill(text);
    await this.page.waitForTimeout(500);
  }

  async fillCarListingEmailField(text) {
    await this.carListingEmailField.fill(text);
    await this.page.waitForTimeout(500);
  }

   async fillKmDrivenField(text) {
    await this.kmDrivenField.fill(text);
  }

  
  async clickOnButtonWithText(text) {
    const button = await this.page.locator("//button[contains(text(),'" + text + "')]");
    await button.click();
  }

  async fillCarPriceField(text) {
    await this.carPrice.fill(text);
  }

  async fillPickupLocationField(text) {
    await this.pickupLocation.fill(text);
    await this.page.waitForTimeout(3000);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  
  async fillCarValueField(text) {
    await this.carValueField.fill(text);
    await this.page.waitForTimeout(500);
  }

 async selectPickupDeliveryOption(type) {
    const option = await this.page.locator("(//select[@class='w-full pl-10 py-3 border rounded-lg focus:ring-1 focus:ring-[#A64AC9] undefined'])[1]");
    await option.selectOption({ label: type });
  }

   async selectAirportDeliveryOption(type) {
    const option = await this.page.locator("//select[@class='w-full pl-10 py-3 border rounded-lg focus:ring-1 focus:ring-[#A64AC9] undefined']");
    await option.selectOption({ label: type });
  }

  async fillPickupDeliveryField(text) {
    await this.pickupDeliveryField.fill(text);
  }

    async fillAirportField(type) {
    await this.airportfield.selectOption({ label: type });
  }

  async selectAccessories(text){
    const accesoriesName = await this.page.locator('//label[text()="Accessory Name"]/following-sibling::select');
    await accesoriesName.selectOption({ label: text });
  }

  async fillPackages(type){
    const option = await this.page.locator("(//input[@type='number'])[1]");
    await option.fill(type)
  }

  
  async clickPackagesOption(option){
    await this.page.locator("//li[contains(text(),'" + option + "')]").click();
  }

  async uploadingCarImages(){
    await this.page.locator("#thumbnailUpload").setInputFiles('test_Data/car_Images/thumbnail.jpg');
   
    await this.page.locator("#interiorUpload1").setInputFiles([
    'test_Data/car_Images/interior1.jpg',
    'test_Data/car_Images/interior2.jpg',
    'test_Data/car_Images/interior3.jpg'
  ]);

  await this.page.locator("#exteriorUpload").setInputFiles([
    'test_Data/car_Images/exterior1.jpg',
    'test_Data/car_Images/exterior2.jpg',
    'test_Data/car_Images/exterior3.jpg'
  ]);

  await this.page.locator("#windscreenUpload").setInputFiles('test_Data/car_Images/windscreen.jpg');
  }


}
module.exports = { LoginPage };
