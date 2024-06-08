package lesson14_Java_Coding_Challenge.Part01;

public class C01_countVowel {

	public static void main(String[] args) {
		String s = "pack my box with five dozen liquor jugs";
		int count = 0;
		for(int i=0; i<s.length(); i++ ) {
			if(s.toLowerCase().charAt(i)=='a' || s.toLowerCase().charAt(i)=='e' || s.toLowerCase().charAt(i)=='i' || 
					s.toLowerCase().charAt(i)=='o' || s.toLowerCase().charAt(i)=='u') {
				count ++;
			}
		}
		System.out.println(count);
	}
}
