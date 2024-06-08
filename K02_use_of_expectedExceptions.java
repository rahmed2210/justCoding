package seleniumMethods;

import java.time.Duration;
import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class K02_use_of_expectedExceptions {
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
	
	@Test (enabled = true)
	public void testNGExceptionTest01() {
		System.out.println("We can verify whether a code throws the expected exception or not. Here it will fail");
		int i = 1 / 0;
	}	
	
	@Test (enabled = true, expectedExceptions = ArithmeticException.class)
	public void testNGExceptionTest02() {
		System.out.println(
				"We can verify whether a code throws the expected exception or not. Here it will pass as expected exception is used");
		int i = 1 / 0;
	}	
	
	@Test (enabled = true, expectedExceptions = NoSuchElementException.class)
	public void sameDayTest(){
		driver.findElement(By.xpath("//span[text()='Same-Day' and @class='hpcards__container--content--title']")).click();
	}
		
	@AfterTest
	public void tearUp() {
		driver.quit();
	}
	
	
	
	
	

}
