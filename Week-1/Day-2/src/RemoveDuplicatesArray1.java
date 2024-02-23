
//Write a program to remove duplicate values from an array and returns an array of unique values. int[] removeDuplicates(int[]values)
//        Ex:
//        values = [2, 4, 6, 2, 8, 10, 4, 12, 14, 6]
//        result = [2, 4, 6, 8, 10, 12, 14]

import java.util.*;
public class RemoveDuplicatesArray1 {
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);

        System.out.println("Enter the length of Array: ");
        int length=s.nextInt();

        int arr[]=new int[length-1];

        System.out.println("Enter all Elements: ");
        for(int i=0;i<arr.length;i++){
            arr[i]=s.nextInt();
        }

        int DistinctArray[]=removeDuplicate(arr);

        System.out.println("Non Duplicate values are: ");
        for(int i=0;i<DistinctArray.length;i++){
            System.out.print(+DistinctArray[i]+" ");
        }
    }

    /*      MARK: Removing Duplicates
           DESC: - Here we are removing duplicates ekements inside the Array
                 - All the elements inside the Array having occurance more than one we find them
                 - Here we are counting the occurance of the each element
                 - Then we only take down the element those having the occurance only 1
   */
    public static int[] removeDuplicate(int arr[]){
        int index=0;
        HashMap<Integer,Integer> map=new HashMap<>();// Adding all elements of Array inside tha HashMap

        for(int i=0;i<arr.length;i++){ //Maintaining Record of number of occurance in Array
        if(!map.containsKey(arr[i])){
            map.put(arr[i],1);
        }else{
            map.put(arr[i],map.get(arr[i])+1);
        }
        }

        int resultArray[]=new int[map.size()-1];
        for(int i: map.keySet()){
        if(map.get(i)==1){ //Picking up that having only one occurance
            resultArray[index]=i;
            index++;

        }
        }

        return resultArray; //Returning new Array
    }
}
