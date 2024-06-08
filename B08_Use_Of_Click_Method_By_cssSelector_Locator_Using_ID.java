package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class B08_Use_Of_Click_Method_By_cssSelector_Locator_Using_ID {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
		//	driver.manage().window().maximize();  //    fullscreen() method
		//	driver.manage().deleteAllCookies();  // delete all cookies
		driver.get("https://portaldev.cms.gov/portal/");
	}
	
	 // cssSelector by id 
	// --> first html tag, then # (hash), then write the value of id inside the string
	@Test
	public void loginButtonTest() throws InterruptedException {
		driver.findElement(By.cssSelector("button#cms-login-submit")).click();
		Thread.sleep(5000);
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
}