package seleniumMethods;


import java.time.Duration;
import java.util.List;
import java.util.Set;

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

public class M03_SwitchWindows_differentWay {
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
		driver.get("https://demoqa.com/browser-windows"); 
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		Thread.sleep(2000);	
	}
	
	
	@Test (enabled = true, priority = 1)

	public void switchWindows() throws InterruptedException {
		String mainHandle = driver.getWindowHandle();
		System.out.println("Main Window ID: " + mainHandle + "\n");
		
		// click the new Window button
		driver.findElement(By.xpath("//button[text()='New Window']")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[text()='New Window']")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[text()='New Window']")).click();
		Thread.sleep(5000);

		Set<String> allHandles = driver.getWindowHandles();
		System.out.println("Windows Open After Click: " + allHandles.size());

		// for each loop
		for (String windowHandle : allHandles) {
			if (mainHandle.equals(windowHandle)) {
				System.out.println("\t Window ID 1: \t" + windowHandle + "\n \t URL: \t \t" + driver.getCurrentUrl()
						+ "\n \t Title: \t \t" + driver.getTitle());
			} else {
				driver.switchTo().window(windowHandle);

				System.out.println("\t Window ID 2: \t" + windowHandle + "\n \t URL: \t \t" + driver.getCurrentUrl()
						+ "\n \t Title: \t \t" + driver.getTitle());

			}
		}
	}

	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	

}
