
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

import java.util.Arrays;
import java.util.Scanner;

public class MeadianOfArray {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the length of Array-1: ");
        int length1=s.nextInt();
        System.out.println("Enter the elements of Array-1: ");
        int arr1[]=new int[length1];
        for (int i = 0; i < length1; i++) {
            arr1[i]=s.nextInt();
        }

        System.out.println("Enter the length of Array-2: ");
        int length2=s.nextInt();
        System.out.println("Enter the elements of Array-2: ");
        int arr2[]=new int[length2];
        for (int i = 0; i < length2; i++) {
            arr2[i]=s.nextInt();
        }
//        int arr1[]={9,1,2};
//        int arr2[]={2,4,5,6,7};
        double median=findMedianOfArray(arr1,arr2);
        System.out.println(median);


    }

    /*  MARK: Finding Median of Array
     DESC:   - Here we are finding the median of two sorter arrays
             - We are first merging the both Array in sorted way
             - After finding merge Array we can find meading easily
*/
    public static double findMedianOfArray(int arr1[],int arr2[]){
        int mergedArray[]=mergeTwoArray(arr1,arr2);// Calling merge Array function to merge both arrays
        if(mergedArray.length%2==0){
            int left=(mergedArray.length-1)/2;
            int right=left+1;
            return (double) (mergedArray[left]+mergedArray[right])/2;
        }else{
            int mid=(mergedArray.length-1)/2;

            return (double)(mergedArray[mid]);
        }
//return 0;
    }

    /*  MARK: Merging two Arrays in sorted Way
     DESC:   - Here we merging both array in sorted Array
             - Here we are taking three pointers for array-1 , array-2 , finalArray
             - Returning Array with adding both Arrays
*/
    public static int[] mergeTwoArray(int arr1[],int arr2[]){
        int mergedArr[]=new int[arr1.length+arr2.length];
        int index1=0;
        int index2=0;
        int index3=0;
        while(index1<arr1.length && index2<arr2.length){
            if(arr1[index1]<arr2[index2]){
                mergedArr[index3]=arr1[index1];
                index1++;
            }
            else
            {
                mergedArr[index3]=arr2[index2];
                index2++;
            }


            index3++;
        }
        while(index1<arr1.length){
            mergedArr[index3]=arr1[index1];
            index1++;
            index3++;
        }
        while (index2<arr2.length){
            mergedArr[index3]=arr2[index2];
            index2++;
            index3++;

        }
        System.out.println("Array: ");
                printArray(mergedArr);
           return mergedArr;
        }

    /*  MARK: Printing Array
        DESC:- Iterate over each element are printing each element in single row
*/
    public static void printArray(int arr[]){
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]+" ");
        }
        System.out.println();
    }

    }

