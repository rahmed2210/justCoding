package lesson14_Java_Coding_Challenge.Part01;

/*
Que: Print your name vertically character by character
*/

public class A01_characterOneByOneVertically {

	public static void main(String[] args) {
		String s = "Tofael Kabir";
		// total character = 12, how we got it? formula: s.length()
		// first one: index number 0
		// last one: index number 11  , it is s.length-1
	
		for(int i=0; i<s.length(); i++ ) {
			System.out.println(s.charAt(i));
		}
		
	}

}
