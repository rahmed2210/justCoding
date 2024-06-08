package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class B05_Use_Of_Click_Method_By_partialLinkText_Locator {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
				driver.manage().window().maximize();  //    fullscreen() method
				driver.manage().deleteAllCookies();  // delete all cookies
				driver.get("https://www.ebay.com/");
				Thread.sleep(5000);
	}
	
	// Source: at the bottom of the page, first element sell column is 'Start Selling'
	// when there is no priority, than the test cases run alphabetically
	@Test (enabled = true, priority = 1)
	public void startSellingTest02() throws InterruptedException {
		driver.findElement(By.partialLinkText("Start se")).click();
		Thread.sleep(5000);
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
}