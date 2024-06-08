package lesson14_Java_Coding_Challenge.Part01;

// Que: How many 'z' (They don't say upper or lower) inside the provided String?
// you have to ask is it upper case or lower case?
// Better not to ask if they don't define

public class B03_countASpecificCharacter {

	public static void main(String[] args) {
		String s = "ZiyadZ Alz KhilanliezZZZ";
		int count = 0;
		
		for(int i=0; i<s.length(); i++) {
			if(s.toLowerCase().charAt(i)=='z') { 
				// how many z, regardless of upper or lower
				count ++;
			}
		}
		System.out.println(count);
	}
}
