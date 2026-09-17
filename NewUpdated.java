import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    public static void main(String[] args) {

        // Start Chrome browser
        WebDriver driver = new ChromeDriver();

        try {
            // Open website
            driver.get("https://www.example.com");

            // Maximize browser
            driver.manage().window().maximize();

            // Find an element
            WebElement element = driver.findElement(By.tagName("h1"));

            // Print element text
            System.out.println("Page heading: " + element.getText());

        } finally {
            // Close browser
            driver.quit();
        }
    }
}
