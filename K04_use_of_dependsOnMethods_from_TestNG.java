package seleniumMethods;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class K04_use_of_dependsOnMethods_from_TestNG {
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
	
	@Test (enabled = true, groups = {"smokeTest", "functionalTest", "regressionTest"})
	public void mouseHoverActionOnAboutUsTest() throws InterruptedException {
		Actions actions = new Actions(driver);
		WebElement aboutUs = driver.findElement(By.xpath("//a[contains(text(), 'About Us') and @class='hidden-xs dropdown']"));
		actions.moveToElement(aboutUs).build().perform();
		Thread.sleep(2000);	
	}	
	// use of dependsOnMethods
	@Test(enabled = true, dependsOnMethods = {"mouseHoverActionOnAboutUsTest"}, groups = {"regressionTest"} )
	public void mouseHoverActionOnOurLocations() throws InterruptedException {
		Actions actions = new Actions(driver); // very important interview question
		WebElement ourLocations = driver.findElement(By.xpath("//a[normalize-space(text())='Our Locations' and @class='hidden-xs dropdown']"));
		Thread.sleep(2000);
		actions.moveToElement(ourLocations).build().perform();
		Thread.sleep(6000);	
		System.out.println("\nThe text of this web element is: "+ ourLocations.getText());
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	
	
	
	

}
