
//Write a program to remove duplicate values from an array and returns an array of unique values. int[] removeDuplicates(int[]values)
//        Ex:
//        values = [2, 4, 6, 2, 8, 10, 4, 12, 14, 6]
//        result = [2, 4, 6, 8, 10, 12, 14]

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

public class RemoveDuplicatesArray2 {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        ArrayList<Integer>list=new ArrayList<>();
        System.out.println("Enter the length: ");
        int length=s.nextInt();
        System.out.println("Enter all Elements: ");
        for(int i=0;i<length;i++){
            list.add(s.nextInt());
        }
        ArrayList<Integer>newlist=removeDuplicate(list);
        System.out.println("After removing duplicate values: ");
        System.out.println(newlist);
    }
    /*      MARK: Removing Duplicates
            DESC: - Here we are removing duplicates ekements inside the Array
                  - All the elements inside the Array having occurance more than one will reduse to one
                  - Here we are traversing the list two times and checking that is there any duplicates elements or not
                  - If we found duplicate elements then we remove it from the list and the size of list will automatically dicrease
    */
    public static ArrayList<Integer> removeDuplicate(ArrayList<Integer> list){
        for(int i=0;i< list.size();i++){
            //Removing that number that having occurance More than 1
            for (int j = list.size()-1; j >i; j--) {
            if(list.get(i)==list.get(j)){
                list.remove(j);
            }
        }
        }
        // returning list with non duplicate elements
        return list;
    }
}
