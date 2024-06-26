package seleniumMethods;

import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class K03_use_of_threadPoolSize_invocation_count_from_TestNG {
	WebDriver driver;

	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get("https://www.mountsinai.org/"); 
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		Thread.sleep(2000);
	}
	
	// use of invocation count, when? -- if you know some test cases fail for no reason
	// and then you fix it, you can run more than one time by invocation count	
	// use of threadPoolSize
	@Test (threadPoolSize = 3, invocationCount = 2, timeOut = 10000)
	public void titleTest() {
		String expected = "Mount Sinai Health System - New York City | Mount Sinai - New York";
		String actual = driver.getTitle();
		System.out.println("home page title is: " + actual);
		Assert.assertEquals(actual, expected, "Home Page Title doesn't match...");
	}
	
	//TODO Is the threadPoolSize working?
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	
	
	
	

}
