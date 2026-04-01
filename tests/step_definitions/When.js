const { When } = require("@cucumber/cucumber");
const LoginPage = require("../page_object/login");

When("User clicks the on the login button", async function () {
  await this.loginPage.clickOntheLoginButton();
});

When("User fills the email {string} in the email field", async function (validEmail) {
  await this.loginPage.fillEmailField(validEmail);
});

When("User fills the password {string} in the password field", async function (validPassword) {
  await this.loginPage.fillPasswordField(validPassword);
});

When("User clicks the SignIn button on the login page", async function () {
  await this.loginPage.clickOnTheSignInButton();
});

When("User clicks the Rent a Car button", async function () {
  await this.loginPage.clickOnRentACarButton();
});

When("User click the Rent Now button on the dashboard", async function () {
  await this.loginPage.clickOnRentNowButton();
});

When("User fills the {string} in the location field", async function (location) {
  await this.loginPage.fillLocationField(location);
});

When("User selects the Pickup date and time", async function () {
  await this.loginPage.fillPickUpField();
});

When("User selects the drop-off date and time", async function () {
  await this.loginPage.fillDropOffField();
});

When("User clicks the Search Button", async function () {
  await this.loginPage.clickOnSearchButton();
});

When('User clicks on the "Book Now" button', async function () {
  await this.loginPage.clickOnBookNowButton();
});

When('User clicks the "I agree" checkbox', async function () {
  await this.loginPage.clickOnIAgreeCheckbox();
});

When('User clicks the "Down arrow" button on the terms and condition page', async function () {
  await this.loginPage.clickOnDownArrowButton();
});

When('User clicks the "Agree and Close" button', async function () {
  await this.loginPage.clickOnAgreeAndCloseButton();
});

When('User click on the "Proceed to pay" button', async function () {
  await this.loginPage.clickOnproceedToPayButton();
});

When('User clicks the "I Agree, Continue" button', async function () {
  await this.loginPage.clickOnIAgreeAndContinueButton();
});

When("User fills the card number {string} expiry date {string} cvv {string} and {string} in the card details", async function (card, date, cvc, name) {
  await this.loginPage.fillCardNumberField(card, date, cvc, name);
});

When('User click on the "Save" button', async function () {
  await this.loginPage.clickOnSaveButton();
});

When('User clicks the "List a Car" button', async function () {
  await this.loginPage.clickOnListACarButton();
});

When('User click the "List Now" button on the dashboard', async function () {
  await this.loginPage.clickOnlistNowButton();
});

When('User clicks the "Verify" button on car listing page', async function () {
  await this.loginPage.clickOnVerifyButton();
});

When('User clicks the "Next" button on car listing page', async function () {
  await this.loginPage.clickOnNextButton();
});

When('User fills the car plate number {string} in the plate number field', async function (text) {
  await this.loginPage.fillPlateField(text);
});

When('User selects the fuel type {string} from the dropdown', async function (text) {
  await this.loginPage.selectPetrolType(text);
});

When('User fills the name {string} in "Name" field', async function (text) {
  await this.loginPage.fillNameField(text);
});

When('User fills the mobile {string} in "Mobile" field', async function (text) {
  await this.loginPage.fillMobileField(text);
});

When('User fills the email {string} in "Email" field', async function (text) {
  await this.loginPage.fillCarListingEmailField(text);
});

When('User fills the km {string} in "Km Driven" field', async function (text) {
  await this.loginPage.fillKmDrivenField(text);
});


When('User clicks the button with text {string}', async function (text) {
  await this.loginPage.clickOnButtonWithText(text);
});

When('User fills the car price {string} in the field', async function (text) {
  await this.loginPage.fillCarPriceField(text);
});

When('User fills the pickup location {string} in the field', async function (text) {
  await this.loginPage.fillPickupLocationField(text);
});

When('User fills the car value {string} in the field', async function (text) {
  await this.loginPage.fillCarValueField(text);
});

When('User selects the pickup delivery option {string}', async function (text) {
  await this.loginPage.selectPickupDeliveryOption(text);
});

When('User fills the delivery charges {string} in the field', async function (text) {
  await this.loginPage.fillPickupDeliveryField(text);
});

When('User selects the Airport delivery option {string}', async function (text) {
  await this.loginPage.selectAirportDeliveryOption(text);
});

When('User fills the airport location {string} in the field', async function (text) {
  await this.loginPage.fillAirportField(text);
});

When('User selects the accessories {string} from the dropdown', async function (text) {
  await this.loginPage.selectAccessories(text);
});

When('User fill the price in {string} packages', async function (text) {
  await this.loginPage.fillPackages(text);
});

When('User clicks the {string} option on the listing page', async function (text) {
  await this.loginPage.clickPackagesOption(text);
});

When('User uploads the images of car', async function () {
  await this.loginPage.uploadingCarImages();
});






