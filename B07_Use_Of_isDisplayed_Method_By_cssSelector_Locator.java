package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class B07_Use_Of_isDisplayed_Method_By_cssSelector_Locator {
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

	//    if the class contain separate words, they are actually different class, then
	//    we have to close the gap between class by putting dot/period between them
	//    cssSelector by class --> first html tag, then dot, then write class name inside the string, 
	//    remove the space between class, and replace with dot or period
	//    future reference: isDisplayed() should be used after explaining
	@Test (enabled = true, priority = 1)
	public void loginModalHeaderTest() throws InterruptedException {
		boolean flagElement= driver.findElement(By.cssSelector("em.cms-icon.cms-sprite-loggedout.mt-0.mb-0")).isDisplayed();
		Thread.sleep(5000); 
		System.out.println(flagElement); //true outcome created from this line
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
}