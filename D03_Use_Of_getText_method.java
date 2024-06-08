package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;



public class D03_Use_Of_getText_method {
	WebDriver driver;

	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
		driver.manage().window().maximize(); // fullscreen() method
		driver.manage().deleteAllCookies(); // delete all cookies
		driver.get("https://portaldev.cms.gov/portal/");
	}
	 
	
	@Test(enabled = true, priority = 1)
	public void getTextTest() {
		WebElement nur = driver.findElement(By.xpath("//a[text()='New User Registration']"));
		System.out.println("The text for the WebElement is: "+nur.getText());
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}

	
}


