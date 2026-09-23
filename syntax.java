import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SimpleSelenium {
    public static void main(String args) {
        // 1. Open Chrome
        WebDriver driver = new ChromeDriver();

        // 2. Go to a website
        driver.get("https://www.google.com");

        // 3. Print the page title
        System.out.println("Title: " + driver.getTitle());

        // 4. Close the browser
        driver.quit()
