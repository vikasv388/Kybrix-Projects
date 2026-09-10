import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumExample {

    public static void main(String[] args) {

        // Start Chrome
        WebDriver driver = new ChromeDriver();

        // Open Google
        driver.get("https://www.google.com");

        // Print page title
        System.out.println("Page Title: " + driver.getTitle());

        // Find search box
        WebElement searchBox = driver.findElement(By.name("q"));

        // Enter search text
        searchBox.sendKeys("Java Selenium");

        // Submit search
        searchBox.submit();

        // Print updated title
        System.out.println("Search Page Title: " + driver.getTitle());

        // Close browser
        driver.quit();
    }
}
