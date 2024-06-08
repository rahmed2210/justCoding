package seleniumMethods;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class A02_Use_Of_Get_By_testNG {
	
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		// System is a class and setProperty is a method
				System.setProperty("webdriver.chrome.driver", "C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
				// WebDriver is an interface and ChromeDriver is a concrete class which implements Websriver interface
				WebDriver driver = new ChromeDriver();
				driver.manage().window().maximize();  //    fullscreen() method
				driver.manage().deleteAllCookies();  // delete all cookies		
	}
	
	
	@Test
	public void urlTest() {
		driver.get("www.amazon.com");
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
			
			
	
	


}