package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class B11_Use_Of_Click_Method_By_cssSelector_Locator_not_common_way_using_ID {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
			//	driver.manage().window().maximize();  //    fullscreen() method
			//	driver.manage().deleteAllCookies();  // delete all cookies
				driver.get("https://portaldev.cms.gov/portal/");
	}
	
	//  cssSelector by another attribute
	// --> first html tag then [attribute name='value'] inside the string
	@Test  (enabled = true, priority = 1)
	public void loginButtonTest() throws InterruptedException {
		driver.findElement(By.cssSelector("button#cms-login-submit[name='Submit Login']")).click();  // Used ID
		Thread.sleep(5000);
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	/*
	SUB-STRING MATCHES:
    CSS in Selenium has an interesting feature of allowing partial string matches using ^, $, and *.
    https://www.softwaretestingmaterial.com/css-selector-selenium-webdriver-tutorial/
	 */

}