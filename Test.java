
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandlePage {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();

        driver.get("https://www.google.com");

        WebElement searchBox =
                driver.findElement(By.name("q"));

        searchBox.sendKeys("Java Selenium");

        searchBox.submit();

        System.out.println(driver.getTitle());

        driver.quit();
    }
}
