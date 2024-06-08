package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

//isDisplayed() is an alternate of click()method which is boolean type
//isDisplayed() is the method used to verify the presence of a web element
//within the web page.
//Use of isDisplayed()
//available- image, link, button, text field, check box etc.
public class C01_Use_Of_isDisplayed_method {
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
	
	// cssSelector by another attribute
	// --> first html tag then [attribute name='value'] inside the string
	@Test  (enabled = true, priority = 1)
	public void logoTest() throws InterruptedException {
		boolean elementDisplayed = driver.findElement(By.xpath("//em[@id='cms-homepage-header-logo-unauth' and @class='cms-icon cms-sprite-loggedout ms-3']")).isDisplayed();
		System.out.println("Is the logo displayed? ans: " + elementDisplayed);
		Thread.sleep(5000);
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
}