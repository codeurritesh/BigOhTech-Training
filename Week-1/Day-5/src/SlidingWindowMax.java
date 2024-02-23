
//You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
//
//
//
//        Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 Output: 3 3 4 5 5 5 6Explanation:
//        Maximum of 1, 2, 3 is 3
//        Maximum of 2, 3, 1 is 3
//        Maximum of 3, 1, 4 is 4
//        Maximum of 1, 4, 5 is 5
//        Maximum of 4, 5, 2 is 5
//        Maximum of 5, 2, 3 is 5
//        Maximum of 2, 3, 6 is 6
//        Input: arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}, K = 4 Output: 10 10 10 15 15 90 90Explanation:Maximum of first 4 elements is 10, similarly for next 4
//        elements (i.e from index 1 to 4) is 10, So the sequence
//        generated is 10 10 10 15 15 90 90
//
//        Return the max sliding window.

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class SlidingWindowMax {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the length of Array: ");
        int length1=s.nextInt();
        System.out.println("Enter the elements of Array: ");
        int arr1[]=new int[length1];
        for (int i = 0; i < length1; i++) {
            arr1[i]=s.nextInt();
        }
        System.out.println("Enter the window size: ");
        int k=s.nextInt();

        ArrayList<Integer> list=findMax(arr1,k);
        System.out.println(list);

    }

    /*  MARK: Finding MAX trapped water in middle
     DESC:   - Here we are finding the LeftMax Array of the towers
             - Than finding the rightMax Array of towers
             - Than Adding Area by Adding min of both Array minus height of that perticular tower
     */
    public static ArrayList<Integer> findMax(int array[],int k){
        ArrayList<Integer>list2=new ArrayList<>();
        ArrayList<Integer> maxAnswer=new ArrayList<>();
        for(int i=0;i<= array.length-k;i++){// As window Size is 3 that is defined
            int total=0;
            list2.clear();
            for (int j = i; j <i+k ; j++) { // Sliding window from left to right from 0 index to length-k
                list2.add(array[j]);

            }
            Collections.sort(list2);
            maxAnswer.add(list2.get(list2.size()-1));

        }
        return maxAnswer;
    }

}
