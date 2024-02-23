
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
import java.util.ArrayList;
import java.util.BitSet;
import java.util.Scanner;

public class SearchElementMatrix2 {
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

    /* MARK:- Search Target element inside matrix
       DESC:    - Inside this function we are checking that in which row that target value is present
                - Here we are passing each row inside ItCanHave() Method that return the boolean value that target value is present inside that roe or not
                - Then we Apply Binary search to that particular function
                - After the reverse of each rows of matrix we got the rotated Matrix
*/
    public static boolean SearchElementInsideMatrix(int Array[][],int target){
        int length=Array.length*Array[0].length;
        int AllElements[]=new int[length];
        int index=0;
        for (int i = 0; i < Array.length; i++) {
           if(itCanHave(Array[i],target)){
               return binarySearch(Array[i],target);
           }
        }
        return false;
    }

    /*  MARK:- find possibility of target in array
        DESC:    - Here we are checking that in each row that target element should be greater or equal to first value of Array and
             - Here we are passing each row inside ItCanHave() Method that return the boolean value that target value is present inside that roe or not
             - And Target Value should be less or equal to last element of that row
             - return Boolean value
*/
    public static boolean itCanHave(int arr[],int target){
        if(target>=arr[0] && target<=arr[arr.length-1]){
            return true;
        }
        return false;
    }

    /* MARK:- Searching element is that particular row
       DESC:    - Applying binary search in that row and Check the target value is present in row or not.
             - Return boolean values
*/
    public static boolean binarySearch(int AllElements[],int target){
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
