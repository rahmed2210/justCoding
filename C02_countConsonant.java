package lesson14_Java_Coding_Challenge.Part01;

public class C02_countConsonant {

	public static void main(String[] args) {
		String s = "A quick brown fox jumps over the lazy dog";
		int count = 0;
		for(int i=0; i<s.length(); i++ ) {
			if(s.toLowerCase().charAt(i) !='a' && s.toLowerCase().charAt(i) !='e' && s.toLowerCase().charAt(i) !='i' && 
					s.toLowerCase().charAt(i) !='o' && s.toLowerCase().charAt(i) !='u' && s.charAt(i) != ' ') {
				count ++;
			}
		}
		System.out.println(count);
	}
}
//TODO Nasir how to eliminate special character present in String? There should be an easy way, or selecting consonant with or operator is good?
