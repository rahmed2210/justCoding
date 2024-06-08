package seleniumMethods;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class M03_table_automation {
	WebDriver driver;

	@BeforeTest
	public void setUp() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\rubal\\eclipse-workspace\\SeleniumMethods\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.amazon.com/");
	}

	@Test(enabled = false, priority = 1)
	public void readTable() {
		WebElement table = driver.findElement(By.cssSelector("table.navFooterMoreOnAmazon"));
		System.out.println(table.getText());
	}

	@Test(enabled = false, priority = 2)
	public void readAnyRowofTheTable() {
		WebElement row = driver.findElement(By.cssSelector("table.navFooterMoreOnAmazon tr:nth-child(3)"));
		System.out.println(row.getText());
	}

	@Test(enabled = false, priority = 3)
	public void readCellOfAnyRowofTheTable() {
		WebElement row = driver
				.findElement(By.cssSelector("table.navFooterMoreOnAmazon tr:nth-child(1) td:nth-child(3)"));
		System.out.println(row.getText());
	}

	@Test(enabled = true, priority = 4)
	public void readAllRowofTheTable() {
		List<WebElement> listOfWebElements = driver.findElements(By.cssSelector("table.navFooterMoreOnAmazon tr"));
		List<String> rows = new ArrayList<String>();
		for (WebElement element : listOfWebElements) {
			rows.add(element.getText());
		}
		for (String st : rows) {
			System.out.println(st);
			System.out.println(rows);
		}

	}

	@AfterTest
	public void tearUp() {
		driver.quit();
	}

}
