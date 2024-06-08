package seleniumMethods;


import java.time.Duration;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class L04_use_of_drag_and_drop_action {
	WebDriver driver;
	JavascriptExecutor js;

	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		js = (JavascriptExecutor) driver;
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get("http://demo.guru99.com/test/drag_drop.html"); 
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		Thread.sleep(2000);	
	}
	
	@Test (enabled = true, priority = 1)
	public void dragAndDropActionTest() throws InterruptedException {
		// Element which needs to drag (Bank)
		WebElement sourceLocator = driver.findElement(By.xpath("//li[@id='credit2']"));
		// Element which need to drop.(In 'Account' field of debit side)
		WebElement targetLocator = driver.findElement(By.xpath("//ol[@id='bank']")); // ol=ordered list		
		// We Use Actions class for drag and drop.
		Actions actions = new Actions(driver);
 		actions.dragAndDrop(sourceLocator, targetLocator).build().perform(); // to do the double click, doubleClick() is used
 		Thread.sleep(5000);
 		// Practice with the rest of the field			
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	

}
