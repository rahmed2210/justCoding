package lesson14_Java_Coding_Challenge.Part01;

// Que: How many lower case 'z'  inside the provided String?
// you have to ask is it upper case or lower case?
// Better not to ask if they don't define

public class B01_countASpecificCharacter {

	public static void main(String[] args) {
		String s = "ZiyadZ Alz KhilanliezZZZ";
		int count = 0;
		
		for(int i=0; i<s.length(); i++) {
			if(s.charAt(i)=='z') { // how many lower case z
				count ++;
			}
		}
		System.out.println(count);
	}
}
