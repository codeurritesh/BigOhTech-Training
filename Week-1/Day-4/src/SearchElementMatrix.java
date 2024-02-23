
//Write an efficient algorithm that searches for a value in a m x n matrix. This matrix has the following properties:
//
//        Integers in each row are sorted from left to right.
//        The first integer of each row is greater than the last integer of the previous row.
//        Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//        Output: true
//        m == matrix.length
//        n == matrix[i].length
//        1 <= m, n <= 100
//        -104 <= matrix[i][j], target <= 104

import java.lang.reflect.Array;
import java.util.Scanner;

public class SearchElementMatrix {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the dimentions of Matrix: ");
        int rows=s.nextInt();
        int cols=s.nextInt();
        int Array[][]=new int[rows][cols];
        System.out.println("Enter the Elements: ");
        for (int i = 0; i < Array.length; i++) {
            for (int j = 0; j < Array[0].length; j++) {
                Array[i][j]=s.nextInt();
            }
        }

//        int Array[][]= {{1,2,3,4},
//                        {5,6,7,8},
//                        {9,10,11,12},
//                        {13,14,15,16}};
        System.out.println("Enter the Target Value: ");
        int target=s.nextInt();
        System.out.println("Elements Found: "+SearchElementInsideMatrix(Array,target));
    }

    /*  MARK:- Searching target in matrix
        DESC:- Here we are creating new Array of length arr1.length+arr2.length
             - Adding All elements of both array in single Array
             - Then applying binary search to that whole array
*/
    public static boolean SearchElementInsideMatrix(int Array[][],int target){
        int length=Array.length*Array[0].length;
        int AllElements[]=new int[length];
        int index=0;
        for (int i = 0; i < Array.length; i++) {
            for (int j = 0; j < Array[0].length; j++) {
                AllElements[index]=Array[i][j];
                index++;
            }
        }

        int first=0;
        int last=AllElements.length;
        while(first<=last){
            int mid=(first+last)/2;
            if(AllElements[mid]==target){
                return true;
            } else if (AllElements[mid]>target) {
                last=mid-1;
            }else{
                first=mid+1;
            }
        }
        return false;
    }
}
