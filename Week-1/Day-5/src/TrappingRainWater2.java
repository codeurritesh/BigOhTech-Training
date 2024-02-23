
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

public class TrappingRainWater2 {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int length=s.nextInt();
        int arr[]=new int[length];
        for (int i = 0; i < length; i++) {
        arr[i]=s.nextInt();
        }
//        int arr[]={1,8,6,2,5,4,8,3,7};

        System.out.println(findTotalWater(arr));


    }
    /*  MARK: Finding MAX trapped water in middle
        DESC:   - Here we are applying two pointers approach from left and right
             - We also find the difference of the index so that it is easy to find the volume of water
             - In every loop we are checking the value of old volume that if we found any volume greater that older one then we update older volume
*/
    public static int findTotalWater(int towers[]){
        int left=0;
        int right=towers.length-1;
        int maxArea=0; // Create maxArea as 0
        while(left<right){ //Loop until both pointers not meet
            int area=Math.min(towers[left],towers[right])*(right-left); // finding Area by towers height and difference of pointers
            maxArea= Math.max(area, maxArea);//updating maxArea with max one
            if(towers[left]<towers[right]){
                left+=1;
            }else{
                right-=1;
            }
        }
        return maxArea;
    }
}
