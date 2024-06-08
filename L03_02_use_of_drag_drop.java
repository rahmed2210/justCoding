package seleniumMethods;


import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class L03_02_use_of_drag_drop {
	WebDriver driver;

	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get("https://demo.guru99.com/test/drag_drop.html");
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		
	}
	
	@Test (enabled = true, priority = 1)
	public void dragAndDropActionTest() throws InterruptedException {
		WebElement sourceLocator = driver.findElement(By.xpath("//li[@id='credit2']"));
		WebElement targetLocator = driver.findElement(By.xpath("//ol[@id='bank']"));
		Actions actions = new Actions(driver);
		actions.dragAndDrop(sourceLocator, targetLocator).build().perform();
		Thread.sleep(5000);
		
	}
	
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	
	
	
	

}
