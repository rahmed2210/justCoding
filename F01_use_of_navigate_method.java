package seleniumMethods;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class F01_use_of_navigate_method {
	WebDriver driver;

	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20)); // for Page
		driver.get("https://www.amazon.com/"); // as an alternate we can use line 31
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20)); // for webElements
	}
	
	@Test(enabled = true, priority = 1)
	public void navigationTest() throws InterruptedException {
		driver.navigate().to("https://portal.cms.gov/portal/");
		Thread.sleep(2000);
		driver.navigate().back(); // Amazon
		Thread.sleep(2000);
		driver.navigate().forward(); // CMS
		Thread.sleep(2000);
		driver.navigate().refresh(); // CMS
		Thread.sleep(2000);
	}

	@AfterTest
	public void tearUp() {
		driver.quit();
	}

}
