package lesson14_Java_Coding_Challenge.Part01;

/*

Interview question in comcast (PA)F
Write a function to transform input, e.g.:
Input: "Hello Mohammad Tofael Kabir Sharkar"
Output: "Sharkar Kabir Tofael Mohammad Hello"

*/

public class B05__reverseTheWordsFromParagraph {

	public static void main(String[] args) {
		String name = 
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
				+ "Voluptas tempora debitis maiores nemo modi! Alias pariatur nulla "
				+ "rem ipsum, molestiae modi atque dignissimos eius impedit, "
				+ "dolorem iusto voluptatem qui ea?";
		String[] words = name.split(" ");
		// System.out.println(Arrays.toString(words));
		// I did above line just to show that the sentence is split to a List
		// System.out.println(words.length);
		// 4th word = [5-1] th word = [words.length -1] th word
		// length is the property of Array to know the size of the Array
		for(int i = words.length-1; i >=0; i-- ) {
			System.out.print(words[i]+" ");
			// Why print not println?
			// why we use " " ?
		}
	}
}
