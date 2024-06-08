package lesson14_Java_Coding_Challenge.Part01;

public class D03_findLargestAndsmallestNumber {

	public static void main(String[] args) {
		// This is an array
		int [] number = {12, 10, 100, 5, 6, 2, 77, 55, 7, 8, 5, 56, 323, 1, 44, 12, 456, 6, 4, 5, 5};
		int largest = number[0]; 
		int smallest = number[0];
		for (int i=1; i<number.length; i++) {
			if (number[i]>largest) {
				largest= number[i];
			}else if (number[i]<smallest) {
				smallest=number[i];
			}
		}
		System.out.println("Largest number: "+largest);
		System.out.println("Smallest number: "+smallest);
	}
}