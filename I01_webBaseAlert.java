package seleniumMethods;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class I01_webBaseAlert {
	WebDriver driver;

	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get("https://softwaretestingplace.blogspot.com/2017/03/javascript-alert-test-page.html"); 
		Thread.sleep(2000);
	}
	
	@Test(enabled = true, priority = 1)
	public void accepTheAlertFromWindow() throws InterruptedException {
		driver.findElement(By.xpath("//button[text()='Try it']")).click();
		Thread.sleep(4000);
		Alert alert = driver.switchTo().alert();
		Thread.sleep(4000);
		System.out.println("The text of the Alert is: " + alert.getText());
		alert.accept();
	}
	
	@Test(enabled = true, priority = 2)
	public void dismissTheAlertFromWindow() throws InterruptedException {
		driver.findElement(By.xpath("//button[text()='Try it']")).click();
		Thread.sleep(4000);
		Alert alert = driver.switchTo().alert();
		alert.dismiss();
	}
	
  
		
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	
	
	
	

}
