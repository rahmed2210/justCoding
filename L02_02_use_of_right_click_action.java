package seleniumMethods;


import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class L02_02_use_of_right_click_action {
	WebDriver driver;

	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get("https://demo.guru99.com/test/simple_context_menu.html");
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		
	}
	
	@Test (enabled = false, priority = 1)
	public void rightClickActionTest() throws InterruptedException {
		WebElement rvButton = driver.findElement(By.xpath("//span[text()='right click me']"));
		Actions actions = new Actions(driver);
		actions.moveToElement(rvButton).contextClick().build().perform();
		Thread.sleep(5000);
		
	}
	
	
	@Test (enabled = true, priority = 2)
	public void doubleClickAlertTest() throws InterruptedException { 
		WebElement dcButton = driver.findElement(By.xpath("//button[text()='Double-Click Me To See Alert']"));
		Actions actions = new Actions(driver);
		actions.moveToElement(dcButton).contextClick().build().perform(); 
		Thread.sleep(5000);
		
		Alert alert = driver.switchTo().alert();
		System.out.println("\n Alert Text: " + alert.getText());
		alert.accept();
		Thread.sleep(5000);
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	
	
	
	

}
