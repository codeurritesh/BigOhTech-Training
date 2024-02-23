
//Write a method void printArray(int[][]arr)
//        Prints array elements clockwise and anti-clockwise alternatively.
//        Input :
//        1 2 3
//        4 5 6
//        7 8 9
//        Output :
//        1 2 3 6 9 8 7 4 5
//        3 2 1 4 7 8 9 6 5

import java.util.Scanner;

public class SprialMatrixClockAntiClock {
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
//        int array[][]= {{1,2,3,0},
//                        {4,5,6,3},
//                        {7,8,9,2},
//                        {0,9,8,6},
//
//                        };
        System.out.println("ClockWise Sprial: ");
        printClockSprial(array);
        System.out.println("\nAntiClockWise Sprial: ");
        printAntiClockSprial(array);
    }

    /*  MARK:- Printing Array in Clockwise Sprial
        DESC:- Here we are creating the 4 pointers that handle that from where to where the array has to print
             - for rowStart, rowEnd, colStart, colEnd
             - And create 4 loops for printing of array in top, right, down, left order
*/
    public static void printClockSprial(int array[][]){
        int rowStart=0;
        int rowEnd=array.length-1;
        int colStart=0;
        int colEnd= array[0].length-1;
        int countPrintings=0;
        int totalElements= array.length* array[0].length;
        while(countPrintings<totalElements) {
//            System.out.println(countPrintings+" "+totalElements);
            if (countPrintings>=totalElements)
                break;
            for (int i = colStart; i <= colEnd; i++) {
                System.out.print(array[rowStart][i]+" ");
                countPrintings++;

            }
            rowStart++;
            for (int i = rowStart; i <= rowEnd; i++) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[i][colEnd]+" ");
                countPrintings++;

            }
            colEnd--;
            for (int i = colEnd; i >= colStart; i--) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[rowEnd][i]+" ");
                countPrintings++;

            }
            rowEnd--;
            for (int i = rowEnd; i >= rowStart; i--) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[i][colStart]+" ");
                countPrintings++;

            }
            colStart++;

        }


    }

    /*  MARK:- Printing Array in AntiClockwise Sprial
        DESC:- Here we are creating the 4 pointers that handle that from where to where the array has to print
             - for rowStart, rowEnd, colStart, colEnd
             - And create 4 loops for printing of array in top, Left, down, right order
*/
    public static void printAntiClockSprial(int array[][]){
        int rowStart=0;
        int rowEnd=array.length-1;
        int colStart=0;
        int colEnd= array[0].length-1;
        int countPrintings=0;
        int totalElements= array.length* array[0].length;
        while(countPrintings<totalElements) {
            for (int i = colEnd; i >= colStart; i--) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[rowStart][i]+" ");
                countPrintings++;
            }
            rowStart++;
            for (int i = rowStart; i <= rowEnd; i++) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[i][colStart]+" ");
                countPrintings++;

            }
            colStart++;
            for (int i = colStart; i <= colEnd; i++) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[rowEnd][i]+" ");
                countPrintings++;

            }
            rowEnd--;
            for (int i = rowEnd; i >= rowStart; i--) {
                if (countPrintings>=totalElements)
                    break;
                System.out.print(array[i][colEnd]+" ");
                countPrintings++;

            }
            colEnd--;

        }


    }
}
