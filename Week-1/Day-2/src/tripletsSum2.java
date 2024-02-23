
//  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.
//        Ex:
//        target_sum = 6
//        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//        result = [[1, 2, 3]]

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class tripletsSum2 {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the length od Array: ");
        int length=s.nextInt();
        ArrayList<Integer>list=new ArrayList<>();
        System.out.println("Enter elements: ");
        for (int i = 0; i < length; i++) {
            list.add(s.nextInt());
        }
        System.out.println("Enter Sum: ");
        int sum=s.nextInt();

        ArrayList<ArrayList<Integer>> ALlPossible=findTriplet(list,sum);
        System.out.println(ALlPossible);
    }
    /*
   MARK: Finding Triplet
   DESC: - Here we are finding for the triplet which is having the sum equals to target
         - Here we are using three pointer Approach where all pointers are distinct
         - if the sum of all three if the sum is equals to target the add it into the Allpossible 2-D ArrayList
         - Creating 2D ArrayList and Maintaining all records of combinations
    */
    public static ArrayList<ArrayList<Integer>> findTriplet(ArrayList<Integer>arr,int tar){
        Collections.sort(arr);
        int n=arr.size();
        ArrayList<ArrayList<Integer>> AllPossibles=new ArrayList<>();

        for (int i = 0; i < n; i++) {
            for (int j = i; j <n; j++) {
                for (int k = j; k < n; k++) {
                    ArrayList<Integer> list2=new ArrayList<>();

                    if((arr.get(i)+arr.get(j)+arr.get(k))==tar && (arr.get(i)!=arr.get(j)) && (arr.get(j)!=arr.get(k)) && (arr.get(i)!=arr.get(k)))
                    {
                        list2.add(arr.get(i));
                        list2.add(arr.get(j));
                        list2.add(arr.get(k));
                        AllPossibles.add(list2);
                    }
                }
            }
        }
//        System.out.println(AllPossibles);
        return AllPossibles;
    }
}
