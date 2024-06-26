package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class B06_Use_Of_Click_Method_By_cssSelector_Locator {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
				driver.manage().window().maximize();  //    fullscreen() method
				driver.manage().deleteAllCookies();  // delete all cookies
				driver.get("https://portaldev.cms.gov/portal/");
	}

	// cssSelector is very important for interview
	// cssSelector by class --> first html tag, then dot, then write class name inside the string
	@Test (enabled = true, priority = 1)
	public void newUserRegistrationButtonTest() throws InterruptedException {
		driver.findElement(By.cssSelector("a.cms-newuser-reg")).click();
		Thread.sleep(5000);
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
}