import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

//  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.
//        Ex:
//        target_sum = 6
//        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//        result = [[1, 2, 3]]


import java.util.Scanner;

public class tripletsSum {
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

        ArrayList<ArrayList<Integer>> Resultlist=findTriplet(list,sum);
        System.out.println("All Possible Triplets: ");
        System.out.println(Resultlist);
    }
    /*
   MARK: Finding Triplet
   DESC: - Here we are finding for the triplet which is having the sum equals to target
         - As window Size is 3 that is defined
         - Sliding window from left to right from 0 index to length-3
         - Creating 2D Array and Mainting all records of combinations
    */
    public static ArrayList<ArrayList<Integer>> findTriplet(ArrayList<Integer>list,int sum){
       ArrayList<Integer>list2=new ArrayList<>();
       ArrayList<ArrayList<Integer>> AllPossibles=new ArrayList<>();

        // DESC: As window Size is 3 that is defined
       for(int i=0;i<=list.size()-3;i++){
           int total=0;
           list2.clear();

           // DESC: Sliding window from left to right from 0 index to length-3
           for (int j = i; j <i+3 ; j++) {
               list2.add(list.get(j));
            total+= list.get(j);
           }

           // DESC: Creating 2D Array and Mainting all records of combinations when sum is equals to Target
           if(total==sum){
               AllPossibles.add(list2);
           }
       }
        return AllPossibles;
    }
}
