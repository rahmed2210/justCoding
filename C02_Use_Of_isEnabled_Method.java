package seleniumMethods;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class C02_Use_Of_isEnabled_Method {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
				driver.manage().window().maximize();  //    fullscreen() method
				driver.manage().deleteAllCookies();  // delete all cookies
				driver.get("https://portaldev.cms.gov/portal/");
	}
	
	
	@Test  (enabled = true, priority = 1)
	public void loginButtonTest() throws InterruptedException {
	boolean loginButtonEnabled =	driver.findElement(By.xpath("//button[@id='cms-login-submit']")).isEnabled();
	System.out.println("Is Login Button Enable? Ans: " + loginButtonEnabled);
		Thread.sleep(5000);
	}
	
	
	// if there is a no priority, which one will run first? -- Alphabetically
		// nur = New user Registration
	@Test(enabled = true, priority = 1)
	public void newUserRegistrationTest() {
		boolean nurButtonEnabled = driver.findElement(By.xpath("//a[text()='New User Registration']")).isEnabled();
		System.out.println("Is the New User Registration Button Enable? Ans: " + nurButtonEnabled);
	}
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	

}