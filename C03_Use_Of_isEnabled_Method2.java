package seleniumMethods;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import io.opentelemetry.exporter.logging.SystemOutLogExporter;

public class C03_Use_Of_isEnabled_Method2 {
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

	@Test(enabled = false, priority = 3)
	public void regButtonTest() throws InterruptedException {
		boolean regButtonEnabled = driver.findElement(By.xpath("//a[text()='New User Registration']")).isEnabled();
		System.out.println("Is Reg Button Enable? Ans: " + regButtonEnabled);
		Thread.sleep(5000);
	}

	@Test(enabled = false, priority = 2)
	public void loginButtonTest() throws InterruptedException {
		boolean loginButtonEnabled = driver.findElement(By.xpath("//button[@id='cms-login-submit']")).isEnabled();
		System.out.println("Is Login Button Enable? Ans: " + loginButtonEnabled);
		Thread.sleep(5000);
	}
	
	@Test (enabled = false, priority = 1)
	public void checkBoxClickTest() throws InterruptedException {
		driver.findElement(By.cssSelector("label#cms-label-tc")).click();
		Thread.sleep(5000);
	}

	@Test (enabled = false, priority = 2)
	public void checkBoxSelectedTest() throws InterruptedException {
		boolean checkBoxisSeleted = driver.findElement(By.cssSelector("label#cms-label-tc")).isSelected();
		System.out.println("is check box is selected? And: " + checkBoxisSeleted);
		Thread.sleep(5000);
	}
	

	@AfterTest
	public void tearUp() {
		driver.quit();
	}

	
}


