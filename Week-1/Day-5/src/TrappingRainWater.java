
//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//        Find two lines that together with the x-axis form a container, such that the container contains the most water.
//        Return the maximum amount of water a container can store.
//        Notice that you may not slant the container.
//
//
//        Example 1:
//
//
//        Input: height = [1,8,6,2,5,4,8,3,7]
//        Output: 49
//        Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
//        Example 2:
//        Input: height = [1,1]
//        Output: 1
//        Constraints:
//        n == height.length
//        2 <= n <= 105
//        0 <= height[i] <= 104

import java.util.Scanner;

public class TrappingRainWater {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
//        int length=s.nextInt();
//        int arr[]=new int[length];
//        for (int i = 0; i < length; i++) {
//        arr[i]=s.nextInt();
//        }
        int arr[]={1,8,6,2,5,4,8,3,7};

        System.out.println(findTotalWater(arr));


    }


    /*  MARK: Finding MAX trapped water in middle
        DESC:   - Here we are applying two pointers approach from left and right
                - We also find the difference of the index so that it is easy to find the volume of water
                - In every loop we are checking the value of old volume that if we found any volume greater that older one then we update older volume
*/
    public static int findTotalWater(int arr[]){
        int length= arr.length;
        int leftMax[]=new int[length];
        int rightMax[]=new int[length];
        leftMax[0]=arr[0];
        for (int i = 1; i < length; i++) {
            leftMax[i]=Math.max(arr[i],leftMax[i-1]);
        }
        rightMax[length-1]=arr[length-1];
        for (int i = length-2; i >=0; i--) {
            rightMax[i]=Math.max(arr[i],rightMax[i+1]);
        }
        int totalwater=0;
        for (int i = 0; i <length ; i++) {
            totalwater+=Math.min(leftMax[i],rightMax[i])-arr[i];
        }
        printArray(arr);
        printArray(leftMax);
        printArray(rightMax);
        System.out.println(totalwater);

        return totalwater;
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
