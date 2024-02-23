
//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
//        You have to rotate the image in place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
//
//        Example 1:
//        Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//        Output: [[7,4,1],[8,5,2],[9,6,3]]
//        Example 2:
//        Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//        Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//        n == matrix.length == matrix[i].length
//        1 <= n <= 20
//        -1000 <= matrix[i][j] <= 1000

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class RotateMatrix90Degree {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the Dimention(nxn): ");
        int row=s.nextInt();
        int col=s.nextInt();
        int array[][]=new int[row][col];
        System.out.println("Enter "+row+"X"+col+" Matrix: ");
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[0].length; j++) {
                array[i][j]=s.nextInt();
            }
        }
        int RotetedArray[][]=RotateArray(array);
        System.out.println("Matrix After Rotation: ");
        printArray(RotetedArray);
    }

    /*    MARK:- Rotate Array 90 Degree
          DESC:    - This function is to Rotate Array 90 Degree ClockWise
                   - Here we are following two steps for rotation
                        - Transpose of Array
                        - Reverse each row of Matrix
*/
    public static int[][] RotateArray(int array[][]){
        int transposeMatrix[][]=TransposeMatrix(array);
        return transposeMatrix;
    }

    /*    MARK:- Transpose of Matrix
         DESC:    - Here we are Swapping the i,j to j,i
                  - Then we got transpose of matrix
*/
    public static int[][] TransposeMatrix(int array[][]){
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[0].length; j++) {
                if(i!=j) {
                    int temp = array[i][j];
                    array[i][j] = array[j][i];
                    array[j][i] = temp;
                }else{
                    break;
                }
            }
        }
        System.out.println("After Tranpose: ");
        printArray(array);

        return reverseRows(array);
    }

    /*    MARK:- Reverse Rows
          DESC:    - This function is use to reverse each rows of matrix
                   - Reverse rows of Transpose matrix
                   - After the reverse of each rows of matrix we got the rotated Matrix
*/
    public static int[][] reverseRows(int array[][]){
        for (int i = 0; i < array.length; i++) {
            int left=0;
            int right= array[0].length-1;
            while(left<right){
                int temp=array[i][left];
                array[i][left]=array[i][right];
                array[i][right]=temp;
                left++;
                right--;
            }
        }

        return array;
    }

    /*    MARK:- Printing of Array
          DESC: - Iterate over the Array by single point Approach
                - Print Each element if Array in single line
*/
    public static void  printArray(int array[][]){
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[0].length; j++) {
                System.out.print(array[i][j]+" ");
            }
            System.out.println();
        }
    }
}
