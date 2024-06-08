package seleniumMethods;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class A01_use_of_get_by_main_method {
	
	public static void main(String[] args) throws InterruptedException {
		// System is a class and setProperty is a method	
		System.setProperty("webdriver.chrome.driver", 
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class which implements WebDriver interface.
		WebDriver driver = new ChromeDriver();  // this line opens the chrome browser
		driver.get("https://port");
		driver.manage().window().maximize(); // This line maximize the browser
		driver.manage().deleteAllCookies();
		Thread.sleep(5000);
		driver.quit();
		
		
		
		
		
	}
}
