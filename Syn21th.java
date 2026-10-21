import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleWebPage 

    public static void main(String[] args) 

        // Launch Chrome browser
        WebDriver driver = new ChromeDriver();

        // Open a website
        driver.get("https://www.google.com");

        // Maximize browser window
        driver.manage().window().maximize();

        // Print page title
        System.out.println("Page Title: " + driver.getTitle());

        // Find search box and enter text
        WebElement searchBox = driver.findElement(By.name("q"))
        searchBox.sendKeys("Java Selenium Tutorial");

        // Submit the search
        searchBox.submit()

        // Print current URL
        System.out.println("Current URL: " + driver.getCurrentUrl())

        // Close browser
        driver.quit()
    
