package lesson14_Java_Coding_Challenge.Part01;

// Que: How many upper case 'Z' inside the provided String?
// you have to ask is it upper case or lower case?
// Better not to ask if they don't define

public class B02_countASpecificCharacter {

	public static void main(String[] args) {
		String s = "ZiyadZ Alz KhilanliezZZZ";
		int count = 0;
		
		for(int i=0; i<s.length(); i++) {
			if(s.charAt(i)=='Z') { // how many upper case z
				count ++;
			}
		}
		System.out.println(count);
	}
}
