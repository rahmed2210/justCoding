package seleniumMethods;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class A01_get_by_main_method {

	public static void main(String[] args) {
		// System is a class and setProperty is a method
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		// WebDriver is an interface and ChromeDriver is a concrete class which implements Websriver interface
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();  //    fullscreen() method
		driver.manage().deleteAllCookies();  // delete all cookies
		driver.get("https://www.amazon.com");  
		driver.quit();
		

	}
}
