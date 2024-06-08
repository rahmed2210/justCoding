package lesson14_Java_Coding_Challenge.Part01;

import java.util.jar.Attributes.Name;

/*
Que: Print your name vertically character by character
*/

public class A02_characterOneByOneVerticallyButReverse {

	public static void main(String[] args) {
		String s = "Tofael Kabir";
		// total character = 12, how we got it? formula: s.length()
		// first one: index number 0
		// last one: index number 11  , it is s.length-1
		// 11 = 12-1 = s.length()-1
		
		for(int i=s.length()-1; i>=0; i-- ) {
			System.out.println(s.charAt(i));
		}
		
		}
		
	}

