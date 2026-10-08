import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumExample {

    public static void main(String[] args) {

        // Start Chrome
        WebDriver driver = new ChromeDriver();

        // Open website
        driver.get("https://www.google.com");

        // Print page title
        System.out.println("Title: " + driver.getTitle());

        // Find search box and enter text
        driver.findElement(By.name("q"))
                .sendKeys("Selenium WebDriver");

        // Submit search
        driver.findElement(By.name("q"))
                .submit();

        // Print resulting title
        System.out.println("New Title: " + driver.getTitle());

        // Close browser
        driver.quit();
    }
}
