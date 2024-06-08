package lesson14_Java_Coding_Challenge.Part01;

/*
Que: Print your name horizontally character by character
*/

public class A03_characterOneByOneHorizontallyButReverse {

	public static void main(String[] args) {
		String s = "Hello Mohammad Tofael Kabir Sharkar";
		// total character = 12, how we got it? formula: s.length()
		// first one: index number 0
		// last one: index number 11  , it is s.length-1
		// 11 = 12-1 = s.length()-1
		
		for(int i=s.length()-1; i>=0; i-- ) {
			System.out.print(s.charAt(i));
		}
	}
}





