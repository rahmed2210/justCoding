package seleniumMethods;


import java.time.Duration;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class N01_Use_Of_Notes {
	WebDriver driver;
	
	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class
		driver = new ChromeDriver();
		driver = new FirefoxDriver();

		driver.get("https://portaldev.cms.gov/portal/");

		driver.manage().window().maximize();
		driver.manage().window().fullscreen();
		driver.manage().deleteAllCookies(); // delete all cookies

		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));

	}

	@Test(enabled = true, priority = 4)
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
	
	@Test  (enabled = true, priority = 1)
	public void loginButtonTest1() throws InterruptedException {
		driver.findElement(By.id("cms-login-submit")).click();
		Thread.sleep(5000); // this is not a part of testing, we used it to see the action is happened
	}
	
	@Test  (enabled = true, priority = 2)
	public void loginButtonTest() throws InterruptedException {
	boolean loginButtonEnabled =	driver.findElement(By.xpath("//button[@id='cms-login-submit']")).isEnabled();
	System.out.println("Is Login Button Enable? Ans: " + loginButtonEnabled);
		Thread.sleep(5000);
	}
	
	@Test(enabled = true, priority = 3)
	public void newUserRegistrationTest() {
		boolean nurButtonEnabled = driver.findElement(By.xpath("//a[text()='New User Registration']")).isEnabled();
		System.out.println("Is the New User Registration Button Enable? Ans: " + nurButtonEnabled);
	}
	
	@Test(enabled = true, priority = 4)
	public void selectByVisibleTest() throws InterruptedException{
		WebElement dropdown = driver.findElement(By.xpath("//select[@id='searchDropdownBox']"));
		Select select = new Select(dropdown);
		select.selectByVisibleText("Amazon Pharmacy");
		Thread.sleep(3000);
	}
	
	@Test(enabled = true, priority = 5)
	public void selectByIndexTest() throws InterruptedException{
		WebElement dropdown = driver.findElement(By.xpath("//select[@id='searchDropdownBox']"));
		Select select = new Select(dropdown);
		select.selectByIndex(12);
		Thread.sleep(3000);
	}
	
	@Test (enabled = true, priority = 6)
	public void logoTest02() throws InterruptedException {		
		WebElement logo = driver.findElement(By.xpath("//img[@alt='Mount Sinai']"));
		boolean flag = logo.isDisplayed();
		System.out.println("is logo display? Ans:" + flag);
		Assert.assertTrue(true);
	}
	
	@Test (enabled = false, priority = 7)
	public void rightClickActionTest() throws InterruptedException {
		WebElement rvButton = driver.findElement(By.xpath("//span[text()='right click me']"));
		Actions actions = new Actions(driver);
		actions.moveToElement(rvButton).contextClick().build().perform();
		Thread.sleep(5000);
	}
	
	@Test (threadPoolSize = 3, invocationCount = 2, timeOut = 10000)
	public void titleTest() {
		String expected = "Mount Sinai Health System - New York City | Mount Sinai - New York";
		String actual = driver.getTitle();
		System.out.println("home page title is: " + actual);
		Assert.assertEquals(actual, expected, "Home Page Title doesn't match...");
	}
	
	@Test (enabled = true, groups = {"smokeTest", "functionalTest", "regressionTest"})
	public void mouseHoverActionOnAboutUsTest() throws InterruptedException {
		Actions actions = new Actions(driver);
		WebElement aboutUs = driver.findElement(By.xpath("//a[contains(text(), 'About Us') and @class='hidden-xs dropdown']"));
		actions.moveToElement(aboutUs).build().perform();
		Thread.sleep(2000);	
	}
	
	@Test (enabled = true, priority = 1)
	public void switchWindows() throws InterruptedException {
		String mainWindow = driver.getWindowHandle(); // learn this line
		System.out.println("Main Window ID: " + mainWindow + "\n");

		// click the new Window button
		driver.findElement(By.xpath("//button[text()='New Window']")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[text()='New Window']")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//button[text()='New Window']")).click();
		Thread.sleep(5000);
		// interview question:  How you handle windows parents to child? or how you can recongnize the parent and child window
		
		// Get all window handles -- include parent + child
		// why we are using set? because we don't want duplicate, and set doesn't allow duplicate
		Set <String> allWindowHandles = driver.getWindowHandles();
		System.out.println("Windows Open After Click: " + allWindowHandles.size());

		// Extract Parent and child window from all window handles
		String parent = (String) allWindowHandles.toArray()[0]; // first index: parent
		String child = (String) allWindowHandles.toArray()[1]; // second index: child 

		//	Use window handle to switch from one window to other window (parent to child)
		driver.switchTo().window(child); // switchTo() -- method is used to switch from one to another
	}
	
	
	
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	

}