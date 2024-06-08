package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class B01_Use_Of_Click_Method_By_ID_Locator {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
				System.setProperty("webdriver.chrome.driver", "C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
				WebDriver driver = new ChromeDriver();
				driver.manage().window().maximize();  //    fullscreen() method
				driver.manage().deleteAllCookies();  // delete all cookies
				driver.get("https://portal.cms.gov/portal/");
	}
	
	
	@Test  (enabled = true, priority = 1)
	public void loginButtonTest() throws InterruptedException {
		driver.findElement(By.id("cms-login-submit")).click();
		Thread.sleep(5000); // this is not a part of testing, we used it to see the action is happened
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
			
			
	
	


}