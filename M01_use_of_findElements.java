package seleniumMethods;


import java.time.Duration;
import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class M01_use_of_findElements {
	WebDriver driver;
	JavascriptExecutor js;

	@BeforeTest
	public void setUp() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		js = (JavascriptExecutor) driver;
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.get("https://www.mountsinai.org/"); 
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		Thread.sleep(2000);	
	}
	
	
	@Test(enabled = true, priority = 1)
	public void mouseHoverActionOnAboutUs() throws InterruptedException {
		Actions actions = new Actions(driver);
		WebElement aboutUs = driver.findElement(By.xpath("//a[normalize-space(text())='About Us' and @class='hidden-xs dropdown']"));
		Thread.sleep(4000);
		actions.moveToElement(aboutUs).build().perform(); // this syntax interview question
		Thread.sleep(4000);
		// This below is not a part of the above action
		// It is not must, but better to show
		System.out.println("\nThe text of this web element is: "+ aboutUs.getText());
		// Please try to discuss
		List<WebElement> list = driver.findElements(By.xpath("//a[contains(text(), 'About Us')]//following-sibling::div//child::div//child::div"));
		int numberOfElement = list.size();
		System.out.println("Number of web Elements: "+ numberOfElement); //TODO Ask Nasir, why Number is 1
		for(int i=0; i<numberOfElement; i++ ) {
			System.out.println(list.get(i).getText());
		}
		
	}
	
	//a[contains(text(), 'About Us')]//following-sibling::div//child::div//child::div
	//a[contains(text(), 'Patient Care')]//following-sibling::div//child::div//child::div
	//a[contains(text(), 'Our Locations')]//following-sibling::div//child::div//child::div
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	

}
