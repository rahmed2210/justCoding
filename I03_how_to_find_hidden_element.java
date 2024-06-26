package seleniumMethods;


import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;



public class I03_how_to_find_hidden_element {
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
		driver.get("https://portaldev.cms.gov/portal/"); 
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		Thread.sleep(2000);
	}
	
	@Test (priority = 1)
	public void loginButtonTest01() throws InterruptedException {
		driver.findElement(By.id("cms-login-submit")).click();
		Thread.sleep(4000);
	}
	
	// alternative of above function
	// But follow the next one, why not this one, because when you use xpath, it doesn't execute
	@Test (priority = 2)
	public void loginButtonTest02() throws InterruptedException {
		js.executeScript("document.getElementById('cms-login-submit').click();");
		Thread.sleep(5000);
	}
	
	// "arguments[0].click()" --- easy to memorize, memorize it, if you want
	// follow this one, because you can use any kind of locator (specially xpath is difficult to create by above one)
	// what is the alternative of click() method or click an web element 
	// or how to find a hidden web element-- very important interview question 
	@Test (priority = 3)
	public void loginButtonTest03() throws InterruptedException {
		WebElement loginButton = driver.findElement(By.id("cms-login-submit"));
		js.executeScript("arguments[0].click()", loginButton);
	}
	
	@Test (priority = 4)
	public void loginButtonTest04() {
		driver.findElement(By.id("cms-login-submit")).sendKeys(Keys.ENTER);
	}
	
	@Test (priority = 5)
	public void loginButtonTest05() {
		driver.findElement(By.id("cms-login-submit")).sendKeys(Keys.RETURN);
	}
	
	// until line 67, fine
	// if you are crazy like me , see below
	
	// From here till end, this is high level, so just see, don't take them seriously
	// alternative to click an web element in many ways (never memorize, a collection of code)
	@Test(priority = 6)
	public void homepageLoginButtonTest06() {
		Actions actions = new Actions(driver);
		WebElement homepageLoginButton = driver.findElement(By.xpath("//button[@id='cms-login-submit']"));
		actions.click(homepageLoginButton).perform();
	}
	
	@Test(priority = 7)
	public void homepageLoginButtonTest07() {
		Actions actions = new Actions(driver);
		WebElement homepageLoginButton = driver.findElement(By.xpath("//button[@id='cms-login-submit']"));
		actions.moveToElement(homepageLoginButton).click().perform();
	}

	@Test(priority = 8)
	public void homepageLoginButtonTest08() {
		Actions actions = new Actions(driver);
		WebElement homepageLoginButton = driver.findElement(By.xpath("//button[@id='cms-login-submit']"));
		actions.clickAndHold(homepageLoginButton).release().perform();
	}

	@Test(priority = 9)
	public void homepageLoginButtonTest09() {
		Actions actions = new Actions(driver);
		WebElement homepageLoginButton = driver.findElement(By.xpath("//button[@id='cms-login-submit']"));
		actions.sendKeys(homepageLoginButton, Keys.RETURN).perform();
	}
	
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
}
